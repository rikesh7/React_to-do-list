import React, { useState } from 'react';
const Todo = ({ todo, index, deleteTodo }) => {
  return (
    <li>
      <div className='listDiv'>
        <div className='listText'>{todo.text}</div>
        <div className='btnDiv'>
          <button className='delete' onClick={() => deleteTodo(index)}>
            Delete
          </button>
        </div>
      </div>
    </li>
  );
};
export default Todo;
