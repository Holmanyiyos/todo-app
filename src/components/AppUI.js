import React from "react";
import { TodoContext } from "./Context";
import { TodoCounter } from "./TodoCounter";
import { TodoItem } from "./TodoItem";
import {CreateTodoButton} from "./CreateTodoButton.js";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { ProfileInfo } from './ProfileInfo';

function AppUI(){
  const {
    error, 
    loading, 
    searchedTodos, 
    completeTodo, 
    deleteTodo, 
  } = React.useContext(TodoContext);
    return(
    <div className='window'>
    <aside className="aside" key="aside">
      <ProfileInfo/>
        <TodoCounter/>
        <CreateTodoButton/>
    </aside>
    <main className="main" key="main">
        <TodoSearch/>
        <TodoList>
            {loading && <p>Estamos cargando, espera un poco.</p>}
            {error && <p>Hubo un error, ya puedes enloquecer.</p>}
            {(!loading && !searchedTodos.length) && <p>Create your first task</p>}

            {searchedTodos.map( todo =>(
          <TodoItem 
            key={todo.text} 
            text= {todo.text} 
            complete= {todo.complete} 
            onComplete={()=> completeTodo(todo.text)}
            onDelete = {()=> deleteTodo(todo.text)}
            priority= {todo.priority}
            date= {todo.date}/>
        ))}
        </TodoList>
    </main>
  </div>)
}

export {AppUI};