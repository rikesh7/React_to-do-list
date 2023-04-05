import React from 'react';
import Todo from './Todo';

const TodoList = ({ todos, deleteTodo, editTodo }) => {
  return (
    <ol>
      {todos.map((todo, index) => (
        <Todo
          key={todo.id}
          todo={todo}
          index={index}
          deleteTodo={deleteTodo}
          editTodo={editTodo}
        />
      ))}
    </ol>
  );
};
export default TodoList;
