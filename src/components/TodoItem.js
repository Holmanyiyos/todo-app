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
        <li className={`todo-item ${props.priority} ${props.complete ? 'completed': ""}`}>
        <div className="footer-item">
            {props.priority === "a" && 
            <div className="priority-container">
                <span>Priority:</span>
                <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i>
            </div>}
            {props.priority === "c" && 
            <div className="priority-container">
                <span>Priority:</span>
                <i className="fas fa-star"></i>
            </div>}
            {props.priority === "b" && 
            <div className="priority-container">
                <span>Priority:</span>
                <i className="fas fa-star"></i><i className="fas fa-star"></i>
            </div>}
    
        </div>
        <i 
            className={`${props.complete ? 'fas fa-check-circle': 'far fa-circle'} check-item`}
            onClick={props.onComplete}
        >
        </i>
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