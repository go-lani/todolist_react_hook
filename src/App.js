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
  const [todos, setTodos] = useState([]);

  const [categories, setCategories] = useState([
    { id: 'all', open: true },
    { id: 'active', open: false },
    { id: 'done', open: false },
  ]);

  useEffect(() => {
    setTodos([
      { id: 1, content: 'HTML', done: false },
      { id: 2, content: 'CSS', done: true },
      { id: 3, content: 'Javascript', done: false },
    ]);

    setCategories([
      { id: 'all', open: true },
      { id: 'active', open: false },
      { id: 'done', open: false },
    ]);
  }, []);

  // Todo 렌더링 함수
  const renderTodo = (todos, categories) => {
    const [{ id: currentCategory }] = categories.filter(category => category.open === true);

    let _todos = todos;

    if (currentCategory === 'active') _todos = todos.filter(todo => todo.done === false);
    if (currentCategory === 'done') _todos = todos.filter(todo => todo.done === true);

    return _todos.map(todo => (
      <Todo key={todo.id} todo={todo} onRemoveTodo={removeTodo} onToggleDone={toggleDone} />
    ));
  };

  // Todo 생성시 ID 생성기능
  const createId = () => {
    return Math.max(0, ...todos.map(todo => todo.id)) + 1;
  };

  // Todo 생성기능
  const addTodo = ({ key, target, target: { value } }) => {
    const content = value.trim();

    if (key !== 'Enter' || content === '') return;

    setTodos([...todos, { id: createId(), content, done: false }]);

    target.value = '';
  };

  // Todo 삭제기능
  const removeTodo = id => {
    setTodos([...todos].filter(todo => todo.id !== id));
  };

  // Todo 완료/미완료 체크 기능
  const toggleDone = id => {
    setTodos([...todos.map(todo => (todo.id === id ? { ...todo, id, done: !todo.done } : todo))]);
  };

  // 전체 완료 기능
  const allDone = e => {
    setTodos([...todos.map(todo => ({ ...todo, done: e.target.checked }))]);
  };

  // 완료한 Todo 삭제기능
  const clearDone = () => {
    setTodos([...todos.filter(todo => todo.done !== true)]);
  };

  // 카테고리 탭 기능
  const changeCategory = id => {
    setCategories([
      ...categories.map(category =>
        category.id === id ? { ...category, open: true } : { ...category, open: false },
      ),
    ]);
  };

  // 미완료/완료된 Todo 개수 체크 및 렌더링 함수
  const doneLength = (() => todos.filter(todo => todo.done === true).length)();
  const activeLength = (() => todos.filter(todo => todo.done === false).length)();

  return (
    <div className="container">
      <Header>
        <CreateInput onAddTodo={addTodo} />
      </Header>
      <Tab>
        {categories.map(category => (
          <TabList key={category.id} category={category} onChangeCategory={changeCategory} />
        ))}
      </Tab>
      <TodoWrapper>{renderTodo(todos, categories)}</TodoWrapper>
      <Footer
        onAllDone={allDone}
        onClearDone={clearDone}
        onDoneLength={doneLength}
        onActiveLength={activeLength}
      />
    </div>
  );
};

export default App;
