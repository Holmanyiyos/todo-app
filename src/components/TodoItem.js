import React from "react";
import "../css/TodoItem.css"

function TodoItem(props){
    const handelClick= (e)=>{
        if (e.target.className.includes("edit-item")) {
            props.editTodo(props.id)
            props.setOpenModal(prevState => !prevState)
            props.whoModal("edit")
            window.scrollTo(0,0)
        }else{

        }
    }
        return(
        <li className={`todo-item ${props.state}`}>
        <h3>{props.title}</h3>
        <p className="text">{props.text}</p>
        <i 
            className="far fa-trash-alt close-item"
            onClick={props.onDelete}
        >
        </i>

        <i className="fas fa-edit edit-item"
        onClick={handelClick}
        ></i>
        <p>Finish before: <b>{props.date}</b></p>
    </li>
       )
}

export {TodoItem};