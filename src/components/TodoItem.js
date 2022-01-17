import React from "react";
import "../css/TodoItem.css"

function TodoItem(props){

    if (props.priority === "high") {
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
        <div className="priority-container">
            <span>Priority:</span>
            <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i>
        </div>
            <div className="date-container">
            <span>Date:</span>
            <span className="date-item">{props.date}</span>
            </div>
        </div>
    </li>
       )
    }else if (props.priority === "medium") {
        return(
            <li className={`todo-item ${props.complete ? 'completed': ""}`}>
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
                <div className="priority-container">
                        <span>Priority:</span>
                    <i className="fas fa-star"></i><i className="fas fa-star"></i>
                    </div>
                    <div className="date-container">
                    <span>Date:</span>
                    <span className="date-item">{props.date}</span>
                    </div>
                </div>
            </li>
        )
    }else{
        return(
            <li className={`todo-item ${props.complete ? 'completed': ""}`}>
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
                    <div className="priority-container">
                        <span>Priority:</span>
                    <i className="fas fa-star"></i>
                    </div>
                    <div className="date-container">
                    <span>Date:</span>
                    <span className="date-item">{props.date}</span>
                    </div>
                </div>
            </li>
        )}
}

export {TodoItem};