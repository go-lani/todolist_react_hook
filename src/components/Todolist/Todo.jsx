import React from 'react'

const Todo = ({todoInfo, onToggle, todos, setTodos}) => {
  const { id, content, completed } = todoInfo;

  const removeTodo = id => {
    setTodos(
      [...todos].filter(todo => todo.id !== id)
    )
  }

  return (
    <li id={id} className="todo-item">
      <input className="custom-checkbox" type="checkbox" id={'ck-myId' + id} checked={completed ? true : false} onChange={() => onToggle(id)} />>
      <label htmlFor={'ck-myId' + id}>{content}</label>
      <i className="remove-todo far fa-times-circle" onClick={() => removeTodo(id)}></i>
    </li>
  )
}

export default Todo
