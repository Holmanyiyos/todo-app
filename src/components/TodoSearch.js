import React from "react";
import "../css/TodoSearch.css"

function TodoSearch({search, setSearch}){

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