import React from 'react'

const CreateInput = ({ onAddTodo }) => {
  return (
    <input className="input-todo" placeholder="What needs to be done?" onKeyPress={onAddTodo} autoFocus />
  )
}

export default CreateInput
