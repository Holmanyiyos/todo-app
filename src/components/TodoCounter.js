import React from "react";
import { TodoContext } from "./Context";

const estilos = {
    color: "#fff",
    textAlign: "center"
};

function TodoCounter(){
    const {totalTodos, completedTodos} = React.useContext(TodoContext)
    return(
        <h2 style={estilos}>{completedTodos} of {totalTodos} tasks completed</h2>
    )
}

export {TodoCounter};