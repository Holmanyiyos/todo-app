import React from "react";
import "../css/TodoSearch.css"
import { TodoContext } from "./Context";

function TodoSearch(){
const {search, setSearch} = React.useContext(TodoContext);

    const onSearchValueChange=(e)=>{
        setSearch(e.target.value)
    }
    return(
        <div className="search-container">
        <input 
            placeholder="Search"
            onChange={onSearchValueChange}
            value={search}
        />
        <i className="fas fa-search icon-search"></i>
        </div>
    )
}

export {TodoSearch};