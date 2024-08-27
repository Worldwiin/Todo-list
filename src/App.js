import React, { useState } from 'react';
import TodoList from "./components/Todolist";
import TodoForm from "./components/Todoform";
import './App.css'

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    setTodos([...todos, { text, isCompleted: false }]);
  };

  const completeTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
  };

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
      <div className="app">
        <h1>Todo List</h1>
        <TodoList todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} />
        <TodoForm addTodo={addTodo} />
      </div>
  );
}

export default App;
