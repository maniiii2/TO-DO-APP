// src/TodoList.js
import React from 'react';
import Todo from './Todo';

const TodoList = ({ todos, category, handleRemove }) => {
  return (
    <div className="todo-list">
      <h2>{category}</h2>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} handleRemove={handleRemove} />
      ))}
    </div>
  );
};

export default TodoList;

