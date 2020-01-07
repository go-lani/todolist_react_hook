import React, { useState, useEffect } from 'react';
import TodoWrapper from './components/Todolist';
import Todo from './components/Todolist/Todo';
import './App.css';

const App = () => {
  const [todos, setTodos] = useState([
    { id: 1, content: 'HTML', completed: false },
    { id: 2, content: 'CSS', completed: true },
    { id: 3, content: 'Javascript', completed: false },
  ]);

  const toggleCompleted = id => {
    setTodos([
      ...todos.map(todo => (todo.id === id ? { ...todo, id, completed: !todo.completed } : todo)),
    ]);
  };

  useEffect(() => {
    console.log(todos);
  }, [todos]);

  return (
    <div className="container">
      <h1 className="title">Todos</h1>
      <div className="ver">2.0</div>

      <input className="input-todo" placeholder="What needs to be done?" autoFocus />
      <ul className="nav">
        <li id="all" className="active">
          All
        </li>
        <li id="active">Active</li>
        <li id="completed">Completed</li>
      </ul>

      <TodoWrapper>
        {todos.map(todo => (
          <Todo key={todo.id} todoInfo={todo} onToggle={toggleCompleted} />
        ))}
      </TodoWrapper>

      <div className="footer">
        <div className="complete-all">
          <input className="custom-checkbox" type="checkbox" id="ck-complete-all" />
          <label htmlFor="ck-complete-all">Mark all as complete</label>
        </div>
        <div className="clear-completed">
          <button className="btn">
            Clear completed (<span className="completed-todos">0</span>)
          </button>
          <strong className="active-todos">0</strong> items left
        </div>
      </div>
    </div>
  );
};

export default App;
