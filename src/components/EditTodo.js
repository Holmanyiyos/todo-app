import React from "react";
import {TodoContext} from "./Context"

const EditTodo = (todo)=>{
    const item = todo.todo;
    const [dateSelected, setDateSelected] = React.useState(item.date);
    const [newTodoValue, setNewTodoValue] = React.useState(item.text);
    const [isState, setIsState] = React.useState(item.state);
    const [newTodoTitle, setNewTodoTitle] = React.useState(item.title);
    const {
        TodoToEdit,
        setOpenModal
    } = React.useContext(TodoContext);

    React.useLayoutEffect(()=>{
        const selected = document.getElementById("formState");
        selected.value = item.state;
    },[])

    const onCancel = ()=> {
        setOpenModal(false);
        window.scrollTo(0,window.screen.height);
    }

    const handleSelect = (e)=>{
        const selected = document.getElementById("formState");
        setIsState(selected.value)
    } 
    
    const onSubmit = (e)=> {
        e.preventDefault();
        setOpenModal(false);
        window.scrollTo(0, window.screen.height);
        TodoToEdit({text: newTodoValue,title: newTodoTitle, state:isState, id: item.id, date: dateSelected})
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
                    <input type="date" className="date" name="date" id="date" value={dateSelected} onChange={(e)=>setDateSelected(e.target.value)}/>
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
            <label htmlFor="formState"> State</label>
            <select id="formState" onChange={handleSelect}>
                <option value="to do">To Do</option>
                <option value="in progress">In Progress</option>
                <option value="done">Done</option>
            </select>
        <div className="button-container">
            <button onClick={onCancel} type="button" className="btn-cancel">Cancel</button>
            <button type="submit" className="btn-add">Save</button>
        </div>
        </form>
    )
}

export {EditTodo};