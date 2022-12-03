import styles from "./Footer.module.css";
import vk from "./vk.png";
import phone from "./phone.png";
import logo from "./logo.png";
import web from "./web.png";

import logoWhite from "./logo-white.png";
import vkLight from "./vkLight.png";
import phoneLight from "./phoneLight.png";
import webLight from "./webLight.png";

import { useContext } from "react";
import { ThemeContext } from "../../Theme";
function Footer() {
  const { theme } = useContext(ThemeContext);
  return (
    <footer className={styles.Footer}>
      <div className={styles.Left}>
       
          <div className={styles.LeftIcon}>
            {theme === "dark-theme" ? (
              <img src={phone} alt="phone" />
            ) : (
              <img src={phoneLight} alt="phone" />
            )}
          </div>
          <div className={styles.LeftIcon}>
            {theme === "dark-theme" ? (
              <img src={vk} alt="phone" />
            ) : (
              <img src={vkLight} alt="phone" />
            )}
          </div>
       

        <div className={styles.Address}>
          Красноярский край,
          <br />
          п. Подгорный, ул. Черемуховая
        </div>
      </div>
      <div className={styles.Center}>
        <div className={styles.CenterIcon}>
          {theme === "dark-theme" ? (
            <img src={logo} alt="phone" />
          ) : (
            <img src={logoWhite} alt="phone" />
          )}
        </div>
      </div>
      <div className={styles.Right}>
        <div className={styles.RightTitle}>povered by</div>
        <div className={styles.RightIcon}>
          {theme === "dark-theme" ? (
            <img src={web} alt="phone" />
          ) : (
            <img src={webLight} alt="phone" />
          )}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
