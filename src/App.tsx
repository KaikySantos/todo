import styles from './App.module.css';

import './global.css';

import imageLogo from './assets/image-logo.svg';

function App() {
  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <img src={imageLogo} alt="Imagem logo" />
      </header>
    </div>
  )
}

export default App
