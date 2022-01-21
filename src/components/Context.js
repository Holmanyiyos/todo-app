import React from "react";
import { useLocalStorage } from "./localStorage";

const TodoContext = React.createContext();

function TodoProvider(props){
    const {item: todos, saveItem: saveTodos, loading, error} = useLocalStorage("TODOS_V1", []);
    const [search, setSearch] = React.useState('');
    const [openModal, setOpenModal] = React.useState(false);

    const completedTodos = todos.filter(todo=> !!todo.complete).length;
    const totalTodos = todos.length;
  
    let searchedTodos = [];
    if (!search.length >= 1) {
      searchedTodos = todos;
    }else{
      const filtered = todos.filter(todo => todo.text.toLowerCase().includes(search.toLowerCase()));
      searchedTodos = filtered;
    }
  
    const generateId=()=>{
      let id;
      if (todos.length > 0) {
        id = todos[todos.length -1].id + 1;
      }else{
        id = 1
      }
      return id
    }
    const addTodo =({text, priority})=>{
      const newTodos = [...todos]
      newTodos.push({
        complete: false,
        priority,
        text,
        id:generateId(),
      }) ;
      saveTodos(newTodos);
    }
    const completeTodo =(id)=>{
      const todoIndex = todos.findIndex(todo => todo.id === id);
      const newTodos = [...todos]
      newTodos[todoIndex].complete = true ;
      saveTodos(newTodos);  
    }
  
    const deleteTodo =(id)=>{
      const todoIndex = todos.findIndex(todo => todo.id === id);
      const newTodos = [...todos]
      newTodos.splice(todoIndex, 1) ;
      saveTodos(newTodos);  
    }

    const orderTodo = (num) =>{
      const newTodos = [...todos] 
      if (num === 1) {  
        newTodos.sort((td1, td2)=>{
          return (td1.priority < td2.priority)? -1 : 1
        })
        saveTodos(newTodos)
      }else{
        newTodos.sort((td1, td2)=>{
          return (td1.complete > td2.complete)? -1 : 1
        })
        saveTodos(newTodos)
      }
    }
  
  
    return (
        <TodoContext.Provider value = {{
            loading ,
            error ,
            totalTodos ,
            completeTodo ,
            completedTodos ,
            search,
            deleteTodo ,
            setSearch,
            searchedTodos ,
            openModal,
            setOpenModal,
            addTodo,
            orderTodo
        }}>
            {props.children}
        </TodoContext.Provider>
    );
}

export {TodoContext, TodoProvider}