import React, { useState } from 'react';

const TodoForm = ({ addTodo }) => {
  const [text, setText] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    addTodo({
      text: text,
    });
    setText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type='submit'>Add</button>
    </form>
  );
};
export default TodoForm;
