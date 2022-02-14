import React from "react";
import { TodoContext } from "./Context";
import { TodoItem } from "./TodoItem";
import {CreateTodoButton} from "./CreateTodoButton.js";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoForm } from "./TodoForm";
import {Modal} from "./Modal";
import {Loading} from "./Loading";
import {EditTodo} from "./EditTodo";
import {Header} from "./Header";
import {StateToDo} from "./StateToDo"

// https://flutterawesome.com/a-beautiful-task-planner-app-design-made-in-flutter/

function AppUI(){
  const today = new Date().toLocaleDateString();
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
    dataEdit,
    whoModal,
    modal
  } = React.useContext(TodoContext);
    return(
    <div className='window'>
    <aside className="aside" key="aside">
        <Header/>
        <h2>My Tasks</h2>
        <StateToDo/>
    </aside>
    <main className="main" key="main">
        <TodoSearch/>
        <div className="main__header">
        <h2>Today <span>{today}</span></h2>
        <CreateTodoButton whoModal={whoModal} openModal={openModal} setOpenModal = {setOpenModal}/>
        </div>
        <TodoList orderTodo={orderTodo}>
            {loading && <Loading/>}
            {error && <p>Hubo un error, ya puedes enloquecer.</p>}
            {(!loading && !searchedTodos.length) && <p>Create your first task</p>}

            {searchedTodos.map( todo =>(
          <TodoItem 
            key={todo.id} 
            title= {todo.title}
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