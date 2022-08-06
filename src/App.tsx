import styles from './App.module.css';

import { Header } from './components/Header';
import { TodoContainer } from './components/TodoContainer';

import './global.css';

function App() {
  return (
    <div className={styles.app}>
      <Header />

      <TodoContainer />
    </div>
  )
}

export default App;
