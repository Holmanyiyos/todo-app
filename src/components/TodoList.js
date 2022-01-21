import React from "react";
import "../css/TodoList.css"

function TodoList(props){
    return(
        <section>
            <h2 className="date">Tasks</h2>
            <button className="filter" onClick={()=>{props.orderTodo(1)}}><i className="fas fa-sort-numeric-down"></i></button>
            <button className="filter" onClick={()=>{props.orderTodo(2)}}><i className="far fa-check-circle"></i></button>
            <ul className="list">
                {props.children}
            </ul>
        </section>
    )
}

export {TodoList};