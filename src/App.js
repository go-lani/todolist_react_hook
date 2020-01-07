import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import CreateInput from './components/Inputs/CreateInput';
import TodoWrapper from './components/Todolist';
import Todo from './components/Todolist/Todo';
import Tab from './components/Tab';
import TabList from './components/Tab/TabList';

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
      <Header>
        <CreateInput todos={todos} setTodos={setTodos} />
      </Header>

      <Tab>
        <li id="all" className="active">
          All
        </li>
        <li id="active">Active</li>
        <li id="completed">Completed</li>
      </Tab>

      <TodoWrapper>
        {todos.map(todo => (
          <Todo
            key={todo.id}
            todos={todos}
            setTodos={setTodos}
            todoInfo={todo}
            onToggle={toggleCompleted}
          />
        ))}
      </TodoWrapper>

      <Footer todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default App;
