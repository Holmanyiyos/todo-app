import React, { useEffect } from "react";
import "../css/Header.css"

function Header(){
    const [picture, setPicture] = React.useState("");
    const randomPicture =()=>Math.floor(Math.random()*826)
    useEffect(()=>{
        const img = randomPicture()
        fetch(`https://rickandmortyapi.com/api/character/${img}`)
        .then(data => data.json())
        .then(img => img.image)
        .then(imagen => setPicture(imagen))
    },[])
    
    return(
    <header className="header">
        <div className="header__image">
            <img src={picture} alt="Profile" />
        </div>
        <div className="header__text">
        <h1>Holman Plazas</h1>
        <p>Frontend Developer</p>
        </div>
    </header>)
} 

export {Header}