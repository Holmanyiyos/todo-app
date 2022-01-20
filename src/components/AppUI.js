import React from "react";
import { TodoContext } from "./Context";
import { TodoCounter } from "./TodoCounter";
import { TodoItem } from "./TodoItem";
import {CreateTodoButton} from "./CreateTodoButton.js";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { ProfileInfo } from './ProfileInfo';
import { TodoForm } from "./TodoForm";
import {Modal} from "./Modal"

function AppUI(){
  const {
    error, 
    loading, 
    searchedTodos, 
    completeTodo, 
    deleteTodo, 
    openModal,
    setOpenModal,
  } = React.useContext(TodoContext);
    return(
    <div className='window'>
    <aside className="aside" key="aside">
      <ProfileInfo/>
        <TodoCounter/>
        <CreateTodoButton openModal={openModal} setOpenModal = {setOpenModal}/>
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
       {openModal && (
          <Modal>
            <TodoForm/>
          </Modal>
       )}
    </main>
  </div>)
}

export {AppUI};