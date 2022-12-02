import styles from "./Main.module.css";
function Main({ children }) {
  return <main className={styles.Main}>{children}</main>;
}

export default Main;
