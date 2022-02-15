import React from "react";
import "../css/CreateTodoButton.css"

function CreateTodoButton(props){
    const onClickButton =()=>{
     props.setOpenModal(prevState => !prevState)
     props.whoModal("create")
     window.scrollTo(0,0)
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