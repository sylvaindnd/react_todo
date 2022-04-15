import React from "react";
import { InputGroup, FormControl, Button } from 'react-bootstrap';

class TodoInput extends React.Component {
    constructor(props){
        super(props);
        this.submit = this.props.event;
    }

    test(){
        console.log('in test ')
    }

    render(){
        return (
            <div className="container border p-4 mb-4">
                <InputGroup className="mb-3">
                    <InputGroup.Text><i class="bi bi-journal-text"></i></InputGroup.Text>
                    <FormControl
                    id="todo-input"
                    placeholder="New Todo"
                    aria-label="New Todo"
                    aria-describedby="New Todo"
                    />
                </InputGroup>
                <Button variant="primary" className="w-100" onClick={this.submit}>Add new task</Button>
            </div>
        );
    }
}

export default TodoInput;