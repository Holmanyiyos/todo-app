import React from "react";
import "./css/CreateTodoButton.css"

function CreateTodoButton(props){
    const onClickButton =()=>{
        alert('Aquí se va a abrir el modal')
    }
    return(
        <button 
        className="create-button"
        onClick={onClickButton}
        >
            Create New Task
        </button>
    )
}

export {CreateTodoButton};