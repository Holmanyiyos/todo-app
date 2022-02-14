import React, { useEffect } from "react";
import "../css/Header.css"

function Header(){
    const [picture, setPicture] = React.useState("");
    const randomPicture =()=>Math.floor(Math.random()*826)
    function changePicture(){
        const img = randomPicture()
        fetch(`https://rickandmortyapi.com/api/character/${img}`)
        .then(data => data.json())
        .then(img => img.image)
        .then(image => localStorage.setItem("PICTURE", image))
        .then(imagen => setPicture(imagen))
    }
    useEffect(()=>{
        if (localStorage.getItem("PICTURE")) {
            setPicture(localStorage.getItem("PICTURE"))
        }else{
            fetch(`https://rickandmortyapi.com/api/character/1`)
            .then(data => data.json())
            .then(img => img.image)
            .then(image => localStorage.setItem("PICTURE", image))
            .then(imagen => setPicture(imagen))
        }
    },[picture])
    
    return(
    <header className="header">
        <div className="header__image">
            <img src={picture} alt="Profile" />
            <div className="randomImage" onClick={changePicture}><p>Change Image</p></div>
        </div>
        <div className="header__text">
        <h1>Holman Plazas</h1>
        <p>Frontend Developer</p>
        </div>
    </header>)
} 

export {Header}