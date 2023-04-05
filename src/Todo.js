import React,{useState} from 'react';

const Todo = ({ todo, index, deleteTodo, editTodo }) => {
  const [editable, setEditable] = useState(false);
  const [text, setText] = useState(todo.text);
  const handleUpdate = () => {
    editTodo({
      ...todo,
      text: text,
    });
    setEditable(false);
  };
  return (
    <li>
      {editable ? (
        <>
          <input
            type='text'
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button onClick={handleUpdate}>Save</button>
        </>
      ) : (
        <>
          <div className='listDiv'>
            <div className='listText'>{todo.text}</div>
            <div className='btnDiv'>
              <button onClick={() => setEditable(true)}>Edit</button>
              <button className='delete' onClick={() => deleteTodo(index)}>
                Delete
              </button>
            </div>
          </div>
        </>
      )}
    </li>
  );
};
export default Todo;
