import React from "react";

const estilos = {
    color: "#fff",
    textAlign: "center"
};

function TodoCounter(){
    return(
        <h2 style={estilos}>2 of 3 tasks completed</h2>
    )
}

export {TodoCounter};