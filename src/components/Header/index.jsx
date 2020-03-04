import React from 'react';

const Header = props => {
  return (
    <header>
      <h1 className="title">Todos</h1>
      {props.children}
    </header>
  );
};

export default Header;
