import './App.css';
import React from "react";
import {TodoProvider} from "./components/Context"
import { AppUI } from './components/AppUI';




function App() {
  return (
    <TodoProvider>
    <AppUI />
    </TodoProvider>
  );
}

export default App;
