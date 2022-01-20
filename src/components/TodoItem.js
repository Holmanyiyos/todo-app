import React from "react";
import "../css/TodoItem.css"

function TodoItem(props){
        return(
        <li className={`todo-item ${props.priority} ${props.complete ? 'completed': ""}`}>
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
        
            <div className="date-container">
            <span>Date:</span>
            <span className="date-item">{props.date}</span>
            </div>
        </div>
    </li>
       )
}

export {TodoItem};