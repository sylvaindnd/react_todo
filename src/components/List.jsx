import React from "react";
import { InputGroup, FormControl, Button } from 'react-bootstrap'

class TodoList extends React.Component {
    constructor(props){
        super(props);    
        this.parent = this.props.parent;   
    }

    setTaskDone(event){
        const task = event.target.parentNode.parentNode;
        const index = task.getAttribute('data-index');

        const newList = Array.from(this.parent.state.tasks, (task) => {
            if(task.index==index){
                task.done = !task.done;
                return task;
            }
            return task;
        });

        this.parent.setState({
            tasks: newList
        });
    }

    deleteTask(event){
        const task = event.target.parentNode.parentNode;
        const index = task.getAttribute('data-index');

        const newList = Array.from(this.parent.state.tasks, (task) => {
            if(task.index==index){                
                task.hide = true;
            }
            return task;
        });

        this.parent.setState({
            tasks: newList
        });
    }

    render(){
        return (
            <div className="container border p-4 mb-4">
                <div className="row mb-4">
                    <Button variant="primary" className="col mx-1">All</Button>
                    <Button variant="primary" className="col mx-1">Done</Button>
                    <Button variant="primary" className="col mx-1">Todo</Button>       
                </div>

                <ul className="tasks mb-4">
                    {this.parent.state.tasks.map((task)=>{
                        return (
                            <li className="w-100 border d-flex justify-content-between align-items-center p-2 mb-2" data-Index={task.index} data-Delete={task.hide}>
                                <span className={`task-done-${task.done}`}>{task.name}</span>
                                <div className="d-flex align-items-center">
                                    <input className="form-check-input" type="checkbox" checked={task.done?'checked':''} onClick={(event) => this.setTaskDone(event)}></input>
                                    <Button variant="secondary" className="mx-2"><i class="bi bi-pencil"></i></Button>
                                    <Button variant="danger" className="" onClick={(event) => this.deleteTask(event)}><i class="bi bi-trash"></i></Button>
                                </div>
                            </li>
                        );
                    })}
                </ul>

                <div className="row">
                    <Button variant="danger" className="col mx-1">Delete done tasks</Button>
                    <Button variant="danger" className="col mx-1">Delete all tasks</Button>
                </div>
                
            </div>
        );
    }
}

export default TodoList;