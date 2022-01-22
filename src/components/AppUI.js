import React from "react";
import { TodoContext } from "./Context";
import { TodoCounter } from "./TodoCounter";
import { TodoItem } from "./TodoItem";
import {CreateTodoButton} from "./CreateTodoButton.js";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { ProfileInfo } from './ProfileInfo';
import { TodoForm } from "./TodoForm";
import {Modal} from "./Modal";
import {Loading} from "./Loading";
import {EditTodo} from "./EditTodo";

function AppUI(){
  const {
    error, 
    loading, 
    searchedTodos, 
    completeTodo, 
    deleteTodo, 
    openModal,
    setOpenModal,
    orderTodo,
    editTodo,
    TodoToEdit,
    dataEdit,
    whoModal,
    modal
  } = React.useContext(TodoContext);
    return(
    <div className='window'>
    <aside className="aside" key="aside">
      <ProfileInfo/>
        <TodoCounter/>
        <CreateTodoButton whoModal={whoModal} openModal={openModal} setOpenModal = {setOpenModal}/>
    </aside>
    <main className="main" key="main">
        <TodoSearch/>
        <TodoList orderTodo={orderTodo}>
            {loading && <Loading/>}
            {error && <p>Hubo un error, ya puedes enloquecer.</p>}
            {(!loading && !searchedTodos.length) && <p>Create your first task</p>}

            {searchedTodos.map( todo =>(
          <TodoItem 
            key={todo.id} 
            text= {todo.text} 
            complete= {todo.complete} 
            onComplete={()=> completeTodo(todo.id)}
            onDelete = {()=> deleteTodo(todo.id)}
            priority= {todo.priority}
            id= {todo.id}
            openModal = {openModal}
            setOpenModal = {setOpenModal}
            editTodo = {editTodo}
            whoModal={whoModal}
            />
        ))}
        </TodoList>
       {openModal && (
          <Modal>
            {(modal==="edit")?<EditTodo todo= {dataEdit}/>: <TodoForm/>}
          </Modal>
       )}
    </main>
  </div>)
}

export {AppUI};