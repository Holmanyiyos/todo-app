import React from "react";
import "./css/TodoItem.css"

function TodoItem(props){
    if (props.priority === "high") {
        return(
            <li className="todo-item">
                <i className="far fa-circle check-item"></i>
                <p className="text">{props.text}</p>
                <i className="far fa-times-circle close-item"></i>
                <div className="footer-item">
                <div className="priority-container">
                        <span>Priority:</span>
                    <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
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
            <li className="todo-item">
                <i className="far fa-circle check-item"></i>
                <p className="text">{props.text}</p>
                <i className="far fa-times-circle close-item"></i>
                <div className="footer-item">
                <div className="priority-container">
                        <span>Priority:</span>
                    <i class="fas fa-star"></i><i class="fas fa-star"></i>
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
            <li className="todo-item">
                <i className="far fa-circle check-item"></i>
                <p className="text">{props.text}</p>
                <i className="far fa-times-circle close-item"></i>
                <div className="footer-item">
                    <div className="priority-container">
                        <span>Priority:</span>
                    <i class="fas fa-star"></i>
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