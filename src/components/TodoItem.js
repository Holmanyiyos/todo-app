import React from "react";
import "../css/TodoItem.css"

function TodoItem(props){
    const handelClick= (e)=>{
        if (e.target.className.includes("edit-item")) {
            console.log(e.target.className)
            props.editTodo(props.id)
            props.setOpenModal(prevState => !prevState)
            props.whoModal("edit")
        }else{

        }
    }
        return(
        <li className={`todo-item ${props.complete ? 'completed': ""}`}>
        <div className="footer-item">
            <div className="priority-container">
            </div>
    
        </div>
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
    </li>
       )
}

export {TodoItem};