// src/App.js
import React, { useState } from 'react';
import TodoList from './TodoList';
import AddTodo from './AddTodo';
import './different-styles.css'; // Import the different CSS file

function App() {
  const [todos, setTodos] = useState([]);
  const [inProgress, setInProgress] = useState([]);
  const [completed, setCompleted] = useState([]);

  const handleAdd = (newTodo, category) => {
    const newTask = { id: Date.now(), text: newTodo };
    switch (category) {
      case 'inProgress':
        setInProgress([...inProgress, newTask]);
        break;
      case 'completed':
        setCompleted([...completed, newTask]);
        break;
      default:
        setTodos([...todos, newTask]);
    }
  };

  const handleRemove = (id, category) => {
    switch (category) {
      case 'inProgress':
        setInProgress(inProgress.filter((task) => task.id !== id));
        break;
      case 'completed':
        setCompleted(completed.filter((task) => task.id !== id));
        break;
      default:
        setTodos(todos.filter((task) => task.id !== id));
    }
  };

  return (
    <div className="App">
      <h1>Task Management</h1>
      <AddTodo handleAdd={handleAdd} />
      <TodoList todos={todos} category="To Do" handleRemove={handleRemove} />
      <TodoList
        todos={inProgress}
        category="In Progress"
        handleRemove={handleRemove}
      />
      <TodoList todos={completed} category="Completed" handleRemove={handleRemove} />
    </div>
  );
}

export default App;

