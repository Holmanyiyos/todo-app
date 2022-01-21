import React from "react";
import "../css/Loading.css"


const Loading = () =>{
    return(
    <div className="container">
        <div className="loader"></div>
        <p className="message">Loading...</p>
    </div>
    )
}
export {Loading};