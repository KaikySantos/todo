import styles from './App.module.css';

import { Header } from './components/Header';
import { TodoInput } from './components/TodoInput';

import './global.css';

function App() {
  return (
    <div className={styles.app}>
      <Header />

      <TodoInput />
    </div>
  )
}

export default App;
