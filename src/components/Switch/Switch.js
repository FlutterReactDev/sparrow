import { useContext } from "react";
import { ThemeContext } from "../../Theme";
import styles from "./Switch.module.css";

function Switch() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  function onClick() {
    toggleTheme();
  }
  function darkTheme() {
    return (
      <div className={styles.Switch} onClick={onClick}>
        <div className={styles.Icon}></div>
        <div className={styles.State}>Вкл.</div>
      </div>
    );
  }

  function lightTheme() {
    return (
      <div className={styles.Switch} onClick={onClick}>
        <div className={styles.State}>Выкл.</div>
        <div className={styles.Icon}></div>
      </div>
    );
  }

  return (
    <div className={styles.SwitchContainer}>
      <div className={styles.SwitchTitle}>
        {theme === "dark-theme" ? "Темная тема" : "Светлая тема"}
      </div>

      {theme === "dark-theme" ? darkTheme() : lightTheme()}
    </div>
  );
}

export default Switch;
