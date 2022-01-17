import React from "react";
import "../css/TodoList.css"

function TodoList(props){
    return(
        <section>
            <h2 className="date">Today</h2>
            <ul className="list">
                {props.children}
            </ul>
        </section>
    )
}

export {TodoList};