import React from "react";
import { useLocalStorage } from "./localStorage";

const TodoContext = React.createContext();

function TodoProvider(props){
    const {item: todos, saveItem: saveTodos, loading, error} = useLocalStorage("TODOS_V1", []);
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
  
  
    const completeTodo =(text)=>{
      const todoIndex = todos.findIndex(todo => todo.text === text);
      const newTodos = [...todos]
      newTodos[todoIndex].complete = true ;
      saveTodos(newTodos);  
    }
  
    const deleteTodo =(text)=>{
      const todoIndex = todos.findIndex(todo => todo.text === text);
      const newTodos = [...todos]
      newTodos.splice(todoIndex, 1) ;
      saveTodos(newTodos);  
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
        }}>
            {props.children}
        </TodoContext.Provider>
    );
}

export {TodoContext, TodoProvider}