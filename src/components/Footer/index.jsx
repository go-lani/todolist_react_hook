import React from 'react'

const Footer = ({todos, setTodos}) => {
  const allComplete = e => {
    console.log(e.target.checked);
    setTodos([
      ...todos.map(todo => ({...todo, completed: e.target.checked}))
    ])
  }
  return (
    <footer className="footer">
      <div className="complete-all">
        <input
          className="custom-checkbox"
          type="checkbox"
          id="ck-complete-all"
          onChange={allComplete}
        />
        <label htmlFor="ck-complete-all">Mark all as complete</label>
      </div>
      <div className="clear-completed">
        <button
          className="btn"
          onClick={() => setTodos([...todos.filter(todo => todo.completed !== true)])
          }>
          Clear completed (<span className="completed-todos">{[...todos].filter(todo => todo.completed === true).length}</span>)
        </button>
        <strong className="active-todos">
          {todos.filter(todo => todo.completed === false).length}
        </strong> items left
      </div>
    </footer>
  )
}

export default Footer
