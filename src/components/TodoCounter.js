import React from "react";

const estilos = {
    color: "#fff",
    textAlign: "center"
};

function TodoCounter({total, completed}){
    return(
        <h2 style={estilos}>{completed} of {total} tasks completed</h2>
    )
}

export {TodoCounter};