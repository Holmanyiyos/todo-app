import React from "react";
import { TodoCounter } from "./TodoCounter";
import { TodoItem } from "./TodoItem";
import {CreateTodoButton} from "./CreateTodoButton.js";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { ProfileInfo } from './ProfileInfo';

function AppUI(props){
    return(
    <div className='window'>
    <aside className="aside" key="aside">
      <ProfileInfo/>
        <TodoCounter 
            total = {props.totalTodos}
            completed = {props.completedTodos}
        />
        <CreateTodoButton/>
    </aside>
    <main className="main" key="main">
        <TodoSearch
            search={props.search}
            setSearch={props.setSearch}
        />
        <TodoList>
            {props.searchedTodos.map( todo =>(
          <TodoItem 
            key={todo.text} 
            text= {todo.text} 
            complete= {todo.complete} 
            onComplete={()=> props.completeTodo(todo.text)}
            onDelete = {()=> props.deleteTodo(todo.text)}
            priority= {todo.priority}
            date= {todo.date}/>
        ))}
        </TodoList>
    </main>
  </div>)
}

export {AppUI};