import styles from './App.module.css';

import { Header } from './components/Header';
import { TodoInput } from './components/TodoInput';
import { TodoList } from './components/TodoList';

import './global.css';

function App() {
  return (
    <div className={styles.app}>
      <Header />

      <TodoInput />

      <TodoList />
    </div>
  )
}

export default App;
