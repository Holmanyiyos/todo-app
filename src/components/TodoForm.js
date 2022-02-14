import React from "react";
import { TodoContext } from "./Context";
import { DatePicker } from "@material-ui/pickers";
import "../css/TodoForm.css"

function TodoForm(){
    const [newTodoValue, setNewTodoValue] = React.useState("");
    const [newTodoTitle, setNewTodoTitle] = React.useState("");
    const [dateSelected, setDateSelected] = React.useState(new Date());

    const {
        addTodo,
        setOpenModal
    } = React.useContext(TodoContext);

    const onCancel = ()=> {
        setOpenModal(false)
    }
    const onSubmit = (e)=> {
        e.preventDefault();
        addTodo({text: newTodoValue, title: newTodoTitle, date: dateSelected});
        setOpenModal(false)
    }
    const onChange = (e)=> {
        setNewTodoValue(e.target.value);
    }
    const onChange2 = (e)=> {
        setNewTodoTitle(e.target.value);
    }
   

    return(
        <form onSubmit={onSubmit} className="form">
            <div className="form__header">
                <h2>Create new task</h2>
                <div className="title-container">
                    <label htmlFor="title">Title</label>
                    <input type="text" id="title" onChange={onChange2}/>
                </div>
                <div className="date-container">
                    <label htmlFor="date">Date</label>
                    <DatePicker className="date" id="date" value={dateSelected} onChange={setDateSelected}/>
                </div>
            </div>
            <div className="textArea-container">
            <label htmlFor="textArea">Description</label>
            <textarea id="textArea"
            value={newTodoValue}
            onChange={onChange}
            className="textArea"
            />
            </div>
        <div className="button-container">
            <button onClick={onCancel} type="button" className="btn-cancel">Cancel</button>
            <button type="submit" className="btn-add">Add</button>
        </div>
        </form>
    )
}

export {TodoForm};