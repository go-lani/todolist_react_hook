import React from 'react'

const Todo = ({todoInfo: { id, content, completed }}) => {
  const hello = () => {
    console.log('hello');
  }
  return (
    <li id={id} className="todo-item">
      <input className="custom-checkbox" type="checkbox" id={'ck-myId' + id} checked={completed ? true : false} onChange={hello} />>
      <label htmlFor={'ck-myId' + id}>{content}</label>
      <i className="remove-todo far fa-times-circle"></i>
    </li>
  )
}

export default Todo
