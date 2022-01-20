import React from "react";
import { TodoContext } from "./Context";
import "../css/TodoForm.css"

function TodoForm(){
    const [newTodoValue, setNewTodoValue] = React.useState("");
    const {
        addTodo,
        setOpenModal
    } = React.useContext(TodoContext);

    const onCancel = ()=> {
        setOpenModal(false)
    }
    const onSubmit = (e)=> {
        e.preventDefault();
        addTodo({text: newTodoValue, priority: "high" });
        setOpenModal(false)
    }
    const onChange = (e)=> {
        setNewTodoValue(e.target.value);
    }
    return(
        <form onSubmit={onSubmit} className="form">
            <label>Task</label>
            <textarea 
            placeholder="describe your task"
            value={newTodoValue}
            onChange={onChange}
            className="textArea"
            />
            <label>Priority</label>
            <div className="priority">
                <label>Low</label>
                <input type="checkbox" id="low" />
                <label>Medium</label>
                <input type="checkbox" id="medium" />
                <label>High</label>
                <input type="checkbox" id="high" />
            </div>
        <div className="button-container">
            <button onClick={onCancel} type="button" className="btn-cancel">Cancel</button>
            <button type="submit" className="btn-add">Add</button>
        </div>
        </form>
    )
}

export {TodoForm};