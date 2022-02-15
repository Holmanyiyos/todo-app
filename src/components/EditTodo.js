import React from "react";
import { DatePicker } from "@material-ui/pickers";
import {TodoContext} from "./Context"

const EditTodo = (todo)=>{
    const item = todo.todo;
    const [dateSelected, setDateSelected] = React.useState(item.date);
    const [newTodoValue, setNewTodoValue] = React.useState(item.text);
    const [isCompleted, setIsCompleted] = React.useState(todo.complete);
    const [newTodoTitle, setNewTodoTitle] = React.useState(item.title);

    const {
        TodoToEdit,
        setOpenModal
    } = React.useContext(TodoContext);

    React.useLayoutEffect(()=>{
        if (item.complete) {
            const idCheck = document.getElementById("true");
            idCheck.checked = true 
        } else{
            const idCheck = document.getElementById("false");
            idCheck.checked = true
        }
    },[])

    const onCancel = ()=> {
        setOpenModal(false);
        window.scrollTo(0,window.screen.height);
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
            completedFalse.checked = true;
            setIsCompleted(false);
        }
    }
    const onSubmit = (e)=> {
        e.preventDefault();
        setOpenModal(false);
        window.scrollTo(0, window.screen.height);
        TodoToEdit({text: newTodoValue,title: newTodoTitle, complete:isCompleted, id: item.id})
    }
    const onChange = (e)=> {
        setNewTodoValue(e.target.value);
    }
    const onChange2 = (e)=> {
        setNewTodoTitle(e.target.value);
    }

    return(
        <form onSubmit={onSubmit} className="form form-edit">
            <div className="form__header">
                <h2>Edit your task</h2>
                <div className="title-container">
                    <label htmlFor="title">Title</label>
                    <input type="text" id="title" onChange={onChange2} value={newTodoTitle}/>
                </div>
                <div className="date-container">
                    <label htmlFor="date">Date</label>
                    <DatePicker className="date" id="date" value={dateSelected} onChange={setDateSelected}/>
                </div>
            </div>
            <div className="textArea-container edit-textArea">
                <label htmlFor="description">Description</label>
                <textarea 
                value={newTodoValue}
                onChange={onChange}
                className="textArea"
                id="description"
                />
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