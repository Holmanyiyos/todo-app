import './App.css';
import React from "react";
import { TodoCounter } from "./TodoCounter";
import { TodoItem } from "./TodoItem";
import {CreateTodoButton} from "./CreateTodoButton";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { ProfileInfo } from './ProfileInfo';


const todos = [
  {date:"today",priority: "high", text: "cortar cebolla para el almuerzo" ,complete: "false"},
  {date:"tomorrow",priority: "medium", text: "estudiar react para terminar el proyecto pronto",complete: "false"},
  {date:"friday",priority: "low", text: "lavar moto y quitar residuos de grasa en el motor", complete: "false"},
  {date:"monday",priority: "low", text: "enviar manual para cumplir la meta",complete: "false"},
  {date:"Sunday",priority: "high", text: "Levantarme a las 6 am a trotar :v ok no", complete: "false"},
  {date:"today",priority: "medium", text: "ver el nuevo capitulo de mi serie favorita",complete: "false"},
];

function App() {
  return (
    <div className='window'>
      <aside className="aside">
        <ProfileInfo/>
      <TodoCounter/>
      <CreateTodoButton/>
      </aside>
      <main className="main">
      <TodoSearch/>
      <TodoList>
          {todos.map( todo =>(
            <TodoItem 
              key={todo.text} 
              text= {todo.text} 
              priority= {todo.priority}
              date= {todo.date}/>
          ))}
      </TodoList>
      </main>
    </div>
  );
}

export default App;
