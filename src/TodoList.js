import React, { useState } from 'react';
import Todo from './Todo';
const TodoList = ({ todos, deleteTodo }) => {
  return (
    <ol>
      {todos.map((todo, index) => (
        <Todo todo={todo} index={index} deleteTodo={deleteTodo} />
      ))}
    </ol>
  );
};
export default TodoList;
