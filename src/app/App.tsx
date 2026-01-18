import { Button } from "@presentation/components/button/button";
import styles from"./app.styles.module.scss";

function App() {
  return (
    <>
    <header className={styles['header']}>
      <h1 className={styles['header__brand']}>MindEase</h1>
      <Button label="Login" />
    </header>
    </>
  );
}

export default App;
