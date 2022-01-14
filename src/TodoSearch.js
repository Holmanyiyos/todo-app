import React from "react";
import "./css/TodoSearch.css"

function TodoSearch(){
    return(
        <div className="search-container">
        <input placeholder="Search"/>
        <i class="fas fa-search icon-search"></i>
        </div>
    )
}

export {TodoSearch};