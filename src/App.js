import './App.css';
import React from "react";
import { TodoCounter } from "./TodoCounter";
import { TodoItem } from "./TodoItem";
import {CreateTodoButton} from "./CreateTodoButton";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { ProfileInfo } from './ProfileInfo';


const defaultTodos = [
  {date:"today",priority: "high", text: "cortar cebolla para el almuerzo" , complete: true},
  {date:"tomorrow",priority: "medium", text: "estudiar react para terminar el proyecto pronto",complete: false},
  {date:"friday",priority: "low", text: "lavar moto y quitar residuos de grasa en el motor", complete: false},
  {date:"monday",priority: "low", text: "enviar manual para cumplir la meta",complete: false},
  {date:"Sunday",priority: "high", text: "Levantarme a las 6 am a trotar :v ok no", complete: true},
  {date:"today",priority: "medium", text: "ver el nuevo capitulo de mi serie favorita",complete: true},
];

function App() {
  const [todos, setTodos] = React.useState(defaultTodos);
  const [search, setSearch] = React.useState('');
  const completedTodos = todos.filter(todo=> !!todo.complete).length;
  const totalTodos = todos.length;

  let searchedTodos = [];
  
  if (!search.length >= 1) {
    searchedTodos = todos;
  }else{
    const filtered = todos.filter(todo => todo.text.toLowerCase().includes(search.toLowerCase()));
    searchedTodos = filtered;
  }

  return (
    <div className='window'>
      <aside className="aside" key="aside">
        <ProfileInfo/>
      <TodoCounter 
        total = {totalTodos}
        completed = {completedTodos}
        />
      <CreateTodoButton/>
      </aside>
      <main className="main" key="main">
      <TodoSearch
        search={search}
        setSearch={setSearch}
      />
      <TodoList>
          {searchedTodos.map( todo =>(
            <TodoItem 
              key={todo.text} 
              text= {todo.text} 
              complete= {todo.complete} 
              priority= {todo.priority}
              date= {todo.date}/>
          ))}
      </TodoList>
      </main>
    </div>
  );
}

export default App;
