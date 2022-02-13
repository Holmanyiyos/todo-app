import React from "react";
import { TodoContext } from "./Context";
import "../css/StateToDo.css"

function StateToDo(){
    const {totalTodos, completedTodos} = React.useContext(TodoContext)
    return(
    <>
        <div className="ToDo itemState">
            <div className="state__icon-container">
                <i className="fas fa-user-clock"></i>
            </div>
            <div className="text">
                <h3>To Do</h3>
                <p>{totalTodos - completedTodos} pending tasks</p>
            </div>
        </div>
        <div className="InProgress itemState">
        <div className="state__icon-container">
        <i className="fas fa-spinner"></i>
        </div>
            <div className="text">
                <h3>In Progress</h3>
                <p>0 tasks started</p>
            </div>
        </div>
        <div className="Done itemState">
        <div className="state__icon-container">
            <i className="fas fa-check-circle"></i> 
            </div>
            <div className="text">
            <h3>Done</h3>
            <p>{completedTodos} tasks completed</p>
            </div>
        </div>
    </>
    )
}

export {StateToDo}