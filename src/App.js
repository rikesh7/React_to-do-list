import React, { useState } from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

const App = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const deleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const editTodo = (todo) => {
    const newTodos = [...todos];
    const index = newTodos.findIndex((t) => t.id === todo.id);
    if (index >= 0) {
      newTodos[index] = todo;
      setTodos(newTodos);
    }
  };

  return (
    <div className='container'>
      <h1>Todo List</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} deleteTodo={deleteTodo} editTodo={editTodo} />
    </div>
  );
};

export default App;
