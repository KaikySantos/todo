import styles from './Header.module.css';

import imageLogo from '../assets/image-logo.svg';

export function Header() {
  return (
    <header className={styles.header}>
      <img src={imageLogo} alt="Imagem logo" />
    </header>
  );
}