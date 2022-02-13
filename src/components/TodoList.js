import React from "react";
import "../css/TodoList.css"

function TodoList(props){
    const today = new Date().toDateString();
    const numberDay = new Date().getDate();
    const week = ["Sun", "Mon", "Tue", "Wed","Thu", "Fri", "Sat"];
    const numDay = []
    function positionDay(numero){
        for(let i= 0; i< week.length; i++){
            numDay.push(i - numero + numberDay)
        }   
    }
    for(let i= 0; i< week.length; i++){
        if(today.includes(week[i])){
            positionDay(i)
        }
    }
    return(
        <section className="section-list">
            <div className="weekContainer">
                {week.map(
                    (e, index)=><div className="dateContainer" key={e}>
                            <h4>{e}</h4>
                            <p>{numDay[index]}</p>
                        </div>
                )}
            </div>
            <ul className="list">
                {props.children}
            </ul>
        </section>
    )
}

export {TodoList};