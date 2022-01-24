import React from "react";
import { TodoContext } from "./Context";
import "../css/TodoForm.css"

function TodoForm(){
    const [newTodoValue, setNewTodoValue] = React.useState("");
    const [newPriority, setNewPriority] = React.useState("c");

    const {
        addTodo,
        setOpenModal
    } = React.useContext(TodoContext);

    const onCancel = ()=> {
        setOpenModal(false)
    }
    const isChecked = (e)=>{
        const high = document.getElementById('a');
        const low = document.getElementById('c');
        const medium = document.getElementById('b');
        
        if (e.target.checked) {
            high.checked = false;
            medium.checked = false;
            low.checked = false;
            e.target.checked = true;
            setNewPriority(e.target.id);
        }
    }
    const onSubmit = (e)=> {
        e.preventDefault();
        addTodo({text: newTodoValue, priority: newPriority });
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
                <input type="checkbox" id="c" onClick={isChecked}/>
                <label>Medium</label>
                <input type="checkbox" id="b" onChange={isChecked}/>
                <label>High</label>
                <input type="checkbox" id="a" onChange={isChecked}/>
            </div>
        <div className="button-container">
            <button onClick={onCancel} type="button" className="btn-cancel">Cancel</button>
            <button type="submit" className="btn-add">Add</button>
        </div>
        </form>
    )
}

export {TodoForm};