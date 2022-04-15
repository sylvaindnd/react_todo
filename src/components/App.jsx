import React from 'react';
import '../static/css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoInput from './Input';
import TodoList from './List';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            totalTasks: 0,
            tasks: []
        }
    }

    addTask(event){
        const input = document.getElementById('todo-input');
        const taskName = input.value;
        const taskIndex = this.state.totalTasks;

        if(!taskName.length){
            return;
        }

        let newList = this.state.tasks.concat({
            index: taskIndex,
            name: taskName,
            done: false
        });

        this.setState({
            tasks: newList
        })

        input.value = '';
    }

    render(){
        return (
            <div className={'app'}>
                <h1>TodoInput</h1>
                <TodoInput event={(event) => this.addTask(event)} />
                <h1>TodoList</h1>
                <TodoList parent={this} tasks={this.state.tasks}/>
            </div>            
        )
    }
}

export default App;
