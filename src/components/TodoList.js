import React from "react";
import "../css/TodoList.css"

function TodoList(props){
    return(
        <section className="section-list">
            <div className="filter-container">
            <h2 className="title">Tasks</h2>
            <div className="filter-btn-container">
            <label>Priority</label>
            <button className="filter" onClick={()=>{props.orderTodo(1)}}><i className="fas fa-sort-numeric-down"></i></button>
            </div>
            <div className="filter-btn-container">
            <label>Completed</label>
            <button className="filter" onClick={()=>{props.orderTodo(2)}}><i className="far fa-check-circle"></i></button>
            </div>
            </div>
            <ul className="list">
                {props.children}
            </ul>
        </section>
    )
}

export {TodoList};