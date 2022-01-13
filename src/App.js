// import './App.css';
import React from "react";
import { TodoCounter } from "./TodoCounter";
import { TodoItem } from "./TodoItem";
import {CreateTodoButton} from "./CreateTodoButton";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";


const todos = [
  {text: "cortar cebolla", complete: "false"},
  {text: "estudiar react", complete: "false"},
  {text: "lavar moto", complete: "false"},
  {text: "enviar manual", complete: "false"}
];

function App() {
  return (
    <React.Fragment>
      <TodoCounter/>
      <TodoSearch/>
      <TodoList>
          {todos.map( todo =>(
            <TodoItem key={todo.text} text= {todo.text}/>
          ))}
      </TodoList>
      <CreateTodoButton/>
    </React.Fragment>
  );
}

export default App;
