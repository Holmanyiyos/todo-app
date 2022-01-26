import React, { useEffect } from "react";
import {TodoContext} from "./Context"

const EditTodo = (todo)=>{
    const item = todo.todo;
    const [newTodoValue, setNewTodoValue] = React.useState(item.text);
    const [newPriority, setNewPriority] = React.useState(item.priority);
    const [isCompleted, setIsCompleted] = React.useState(todo.complete);

    const {
        TodoToEdit,
        setOpenModal
    } = React.useContext(TodoContext);

    React.useLayoutEffect(()=>{
        if (item.priority === "a") {
            const priorityCheck = document.getElementById("a");
            priorityCheck.checked = true 
        } else if (item.priority === "b") {
            const priorityCheck = document.getElementById("b");
            priorityCheck.checked = true
        }else{
            const priorityCheck = document.getElementById("c");
            priorityCheck.checked = true
        }
    
        if (item.complete) {
            const idCheck = document.getElementById("true");
            idCheck.checked = true 
        } else{
            const idCheck = document.getElementById("false");
            idCheck.checked = true
        }
    },[])

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
        }else{
            setNewPriority("c");
        }
    }
    const completChecked = (e)=>{
        const completedTrue = document.getElementById('true');
        const completedFalse = document.getElementById('false');

        if (e.target.checked) {
            completedTrue.checked = false;
            completedFalse.checked = false;
            e.target.checked = true;
            setIsCompleted((e.target.id === "true")? true : false);
        }else{
            setIsCompleted(false);
        }
    }
    const onSubmit = (e)=> {
        e.preventDefault();
        setOpenModal(false)
        TodoToEdit({text: newTodoValue, priority:newPriority, complete:isCompleted, id: item.id})
    }
    const onChange = (e)=> {
        setNewTodoValue(e.target.value);
    }

    return(
        <form onSubmit={onSubmit} className="form">
            <label>Task</label>
            <textarea 
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
            <div className="terminated">
                <label>Completed</label>
                <input type="checkbox" id="true" onClick={completChecked}/>
                <label>Incomplete</label>
                <input type="checkbox" id="false" onClick={completChecked}/>
            </div>
        <div className="button-container">
            <button onClick={onCancel} type="button" className="btn-cancel">Cancel</button>
            <button type="submit" className="btn-add">Save</button>
        </div>
        </form>
    )
}

export {EditTodo};