import React from 'react'

const CreateInput = ({todos, setTodos}) => {

  const createId = () => {
    return Math.max(0, ...todos.map(todo => todo.id)) + 1;
  }

  const addTodo = ({key, target, target: { value }}) => {
    const content = value.trim();

    if (key !== 'Enter' || content === '') return;

    setTodos([...todos, { id: createId(), content, completed: false }]);

    target.value = '';
  }

  return (
    <input className="input-todo" placeholder="What needs to be done?" onKeyPress={addTodo} autoFocus />
  )
}

export default CreateInput
