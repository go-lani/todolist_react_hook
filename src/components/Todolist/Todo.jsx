import React from 'react';

const Todo = ({ todo, onToggleDone, onRemoveTodo }) => {
  const { id, content, done } = todo;

  return (
    <li id={id} className="todo-item">
      <input
        className="custom-checkbox"
        type="checkbox"
        id={'ck-myId' + id}
        checked={done ? true : false}
        onChange={() => onToggleDone(id)}
      />
      <label htmlFor={'ck-myId' + id}>{content}</label>
      <i
        className="remove-todo far fa-times-circle"
        onClick={() => onRemoveTodo(id)}
      ></i>
    </li>
  );
};

export default Todo;
