import { useState } from 'react';

import styles from './App.module.css';

import { Header } from './components/Header';
import { TodoInput } from './components/TodoInput';
import { TodoList } from './components/TodoList';

import './global.css';

interface TodoListProps {
  text: string;
  isFinished: boolean;
}

function App() {
  const [todoList, setTodoList] = useState<TodoListProps[]>([]);

  function onAddTask(newTask: TodoListProps) {
    setTodoList([...todoList, newTask]);
  }

  return (
    <div className={styles.app}>
      <Header />

      <TodoInput onAddTask={onAddTask} />

      <TodoList todoList={todoList} />
    </div>
  )
}

export default App;
