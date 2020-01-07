import React from 'react'

const Header = (props) => {
  return (
    <header>
      <h1 className="title">Todos</h1>
      <div className="ver">2.0</div>
      {props.children}
    </header>
  )
}

export default Header
