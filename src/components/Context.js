import React from "react";
import { useLocalStorage } from "./localStorage";

const TodoContext = React.createContext();

function TodoProvider(props){
    const {item: todos, saveItem: saveTodos, loading, error} = useLocalStorage("TODOS_V1", []);

    const [search, setSearch] = React.useState('');
    const [dateSearch, setDateSearch] = React.useState('');
    const [openModal, setOpenModal] = React.useState(false);
    const [dataEdit, setDataEdit] = React.useState("");
    const [modal, setModal] = React.useState("");



    const completedTodos = todos.filter(todo=> !!todo.complete).length;
    const totalTodos = todos.length;
  
    let searchedTodos = [];
    if (!search.length >= 1) {
      searchedTodos = todos;
      if (!dateSearch.length >= 1) {
        searchedTodos = todos;
      }else{
        searchedTodos = dateSearch;
      }
    }else{
      const filtered = todos.filter(todo => todo.text.toLowerCase().includes(search.toLowerCase()) || todo.title.toLowerCase().includes(search.toLowerCase()));
      searchedTodos = filtered;
    }
  
    const filterDay = (date)=>{
      if (dateSearch.length >=1) {
        setDateSearch("")
      }else{
      const filtered = todos.filter(todo => todo.date.includes(date));
      setDateSearch(filtered)
      }
    }

    const generateId=()=>{
      let id = Math.random().toString(36).slice(2)
      return id
    }
    const addTodo =({title, text, date})=>{
      const newTodos = [...todos]
      const id = generateId()
      newTodos.push({
        complete: false,
        title,
        text,
        id:id,
        date
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

    const TodoToEdit =(task)=>{
      const newTodos = [...todos];
      const todoIndex = todos.findIndex(todo => todo.id === task.id);
      newTodos[todoIndex].text = task.text;
      newTodos[todoIndex].priority = task.priority;
      newTodos[todoIndex].complete = task.complete;
      saveTodos(newTodos)
    }

    const editTodo = (id)=>{
      const todoIndex = todos.findIndex(todo => todo.id === id);
      setDataEdit(todos[todoIndex])
    }

    const whoModal=(who)=>{
      if (who === "edit") {
        setModal("edit")
      }else{
        setModal("create")
      }
    }
  
    return (
        <TodoContext.Provider value = {{
            loading ,
            error ,
            totalTodos ,
            filterDay,
            completeTodo ,
            completedTodos ,
            search,
            deleteTodo ,
            setSearch,
            searchedTodos ,
            openModal,
            setOpenModal,
            addTodo,
            editTodo,
            dataEdit,
            TodoToEdit,
            whoModal,
            modal
        }}>
            {props.children}
        </TodoContext.Provider>
    );
}

export {TodoContext, TodoProvider}