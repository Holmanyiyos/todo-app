import React from "react";
import "../css/CreateTodoButton.css"

function CreateTodoButton(props){
    const onClickButton =()=>{
        if (!props.openModal) {
            props.setOpenModal(true);
        }else{
            props.setOpenModal(false);
        }
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