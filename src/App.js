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

  const [categorys, setCategorys] = useState([
    { id: 'all', open: true },
    { id: 'active', open: false },
    { id: 'completed', open: false },
  ]);

  const createId = () => {
    return Math.max(0, ...todos.map(todo => todo.id)) + 1;
  };

  const addTodo = ({ key, target, target: { value } }) => {
    const content = value.trim();

    if (key !== 'Enter' || content === '') return;

    setTodos([...todos, { id: createId(), content, completed: false }]);

    target.value = '';
  };

  const toggleCompleted = id => {
    setTodos([
      ...todos.map(todo => (todo.id === id ? { ...todo, id, completed: !todo.completed } : todo)),
    ]);
  };

  const removeTodo = id => {
    setTodos([...todos].filter(todo => todo.id !== id));
  };

  const allComplete = e => {
    setTodos([...todos.map(todo => ({ ...todo, completed: e.target.checked }))]);
  };

  const clearComplete = () => {
    setTodos([...todos.filter(todo => todo.completed !== true)]);
  };

  const changeCategory = id => {
    setCategorys([
      ...categorys.map(category =>
        category.id === id ? { ...category, open: true } : { ...category, open: false },
      ),
    ]);
  };

  const completedLength = (() => todos.filter(todo => todo.completed === true).length)();
  const activeLength = (() => todos.filter(todo => todo.completed === false).length)();

  const renderTodo = (todos, categorys) => {
    const [{ id: currentCategory }] = categorys.filter(category => category.open === true);
    const _todos = todos;

    switch (currentCategory) {
      case 'all':
        return _todos.map(todo => (
          <Todo
            key={todo.id}
            todoInfo={todo}
            removeTodo={removeTodo}
            onToggleCompleted={toggleCompleted}
          />
        ));
      case 'active':
        return _todos
          .filter(todo => todo.completed === false)
          .map(todo => (
            <Todo
              key={todo.id}
              todoInfo={todo}
              removeTodo={removeTodo}
              onToggleCompleted={toggleCompleted}
            />
          ));
      case 'completed':
        return _todos
          .filter(todo => todo.completed === true)
          .map(todo => (
            <Todo
              key={todo.id}
              todoInfo={todo}
              removeTodo={removeTodo}
              onToggleCompleted={toggleCompleted}
            />
          ));
      default:
        return _todos.map(todo => (
          <Todo
            key={todo.id}
            todoInfo={todo}
            removeTodo={removeTodo}
            onToggleCompleted={toggleCompleted}
          />
        ));
    }
  };

  useEffect(() => {
    console.log(todos);
  }, [todos]);

  return (
    <div className="container">
      <Header>
        <CreateInput onAddTodo={addTodo} />
      </Header>
      <Tab>
        {categorys.map(category => (
          <TabList key={category.id} category={category} onChangeCategory={changeCategory} />
        ))}
      </Tab>
      <TodoWrapper>{renderTodo(todos, categorys)}</TodoWrapper>
      <Footer
        onAllComplete={allComplete}
        onClearComplete={clearComplete}
        completedLength={completedLength}
        activeLength={activeLength}
      />
    </div>
  );
};

export default App;
