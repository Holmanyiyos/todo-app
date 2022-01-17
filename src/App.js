import './App.css';
import React from "react";
import { AppUI } from './components/AppUI';


// const defaultTodos = [
//   {date:"today",priority: "high", text: "cortar cebolla para el almuerzo" , complete: true},
//   {date:"tomorrow",priority: "medium", text: "estudiar react para terminar el proyecto pronto",complete: false},
//   {date:"friday",priority: "low", text: "lavar moto y quitar residuos de grasa en el motor", complete: false},
//   {date:"monday",priority: "low", text: "enviar manual para cumplir la meta",complete: false},
//   {date:"Sunday",priority: "high", text: "Levantarme a las 6 am a trotar :v ok no", complete: true},
//   {date:"today",priority: "medium", text: "ver el nuevo capitulo de mi serie favorita",complete: false},
// ];

function useLocalStorage(itemName, initialValue){
  const localStorageItem = localStorage.getItem(itemName)
  let parsedItem;
  
  if (!localStorageItem) {
    localStorage.setItem(itemName, JSON.stringify(initialValue));
    parsedItem = initialValue;
  } else{
    parsedItem = JSON.parse(localStorageItem);
  }
  const [item, setItem] = React.useState(parsedItem);

  const saveItem = (newItem)=>{
    const stringifiedItem = JSON.stringify(newItem);
    localStorage.setItem(itemName, stringifiedItem);
    setItem(newItem);
  }

  return [
    item,
    saveItem,
  ]
}

function App() {
  const [todos, saveTodos] = useLocalStorage("TODOS_V1", []);
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
    <AppUI 
    totalTodos = {totalTodos}
    completeTodo = {completeTodo}
    completedTodos = {completedTodos}
    search={search}
    deleteTodo = {deleteTodo}
    setSearch={setSearch}
    searchedTodos = {searchedTodos}
    />
  );
}

export default App;
