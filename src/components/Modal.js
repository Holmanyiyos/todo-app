import React from 'react';
import ReactDOM from 'react-dom';
import "../css/Modal.css"

function Modal({children}){
    return ReactDOM.createPortal(
        <div className="modal-container">
            <div className="modal">
            {children}
            </div>
        </div>,
        document.getElementById("modal")
    )
}

export {Modal};