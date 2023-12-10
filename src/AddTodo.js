// src/AddTodo.js
import React, { useState } from 'react';

const AddTodo = ({ handleAdd }) => {
  const [newTodo, setNewTodo] = useState('');
  const [category, setCategory] = useState('todo');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTodo.trim() !== '') {
      handleAdd(newTodo, category);
      setNewTodo('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a new task"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <select onChange={(e) => setCategory(e.target.value)} value={category}>
        <option value="todo">To Do</option>
        <option value="inProgress">In Progress</option>
        <option value="completed">Completed</option>
      </select>
      <button type="submit">Add Task</button>
    </form>
  );
};

export default AddTodo;

