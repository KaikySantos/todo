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

  function onDeleteTask(taskDelete: TodoListProps) {
    const newTodoList = todoList.filter(task => taskDelete.text !== task.text);

    setTodoList(newTodoList);
  }

  function onChangeTaskStatus(taskEdit: TodoListProps) {
    const todoListClone = [...todoList];

    todoListClone.forEach(task => {
      if (task.text === taskEdit.text) {
        task.isFinished = !task.isFinished;
      }
    });

    setTodoList(todoListClone);
  }

  return (
    <div className={styles.app}>
      <Header />

      <TodoInput onAddTask={onAddTask} />

      <TodoList
        todoList={todoList}
        onDeleteTask={onDeleteTask}
        onChangeTaskStatus={onChangeTaskStatus}
      />
    </div>
  )
}

export default App;
