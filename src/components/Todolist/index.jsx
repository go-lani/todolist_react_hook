import React from 'react'

const TodoWrapper = (props) => {
  return (
    <ul className="todos">
      {props.children}
    </ul>
  )
}

export default TodoWrapper
