import styles from "./Header.module.css";
import Logo from "./Лого_Воробьи_вверх.png";
import LogoLight from "./logoLight.png";
import Camera from "./Значок_камеры.png";
import CameraLight from "./cameraLight.png";
import PlayIcon from "./Кнопка_ТВ.png";
import cn from "classnames";
import { useContext, useState } from "react";
import { ThemeContext } from "../../Theme";
function Header() {
  const [menu, setMenu] = useState(false);
  const { theme } = useContext(ThemeContext);
  function toggleMenu() {
    document.body.classList.toggle("no-scroll");
    setMenu((prev) => !prev);
  }

  function onClick() {
    toggleMenu();
  }
  return (
    <header className={styles.Header}>
      <div className={styles.Inner}>
        <div className={styles.Left}>
          <div className={styles.Logo}>
            <div className={styles.LogoElement}>
              {theme === "dark-theme" ? (
                <img src={Logo} alt="logo" />
              ) : (
                <img src={LogoLight} alt="logo" />
              )}
            </div>
            <div className={styles.LogoCamera}>
              {theme === "dark-theme" ? (
                <img src={Camera} alt="logo" />
              ) : (
                <img src={CameraLight} alt="logo" />
              )}
            </div>
          </div>

          <nav className={styles.Nav}>
            <ul className={styles.Menu}>
              <li>
                <a href="/">СОБЫТИЯ</a>
              </li>
              <li>
                <a href="/">УСЛУГИ</a>
              </li>
              <li>
                <a href="/">О НАС</a>
              </li>
            </ul>
          </nav>

          <nav className={styles.MobileNav}>
            <div className={styles.LogoCamera}>
              {theme === "dark-theme" ? (
                <img src={Camera} alt="logo" />
              ) : (
                <img src={CameraLight} alt="logo" />
              )}
            </div>
            <div
              className={cn(styles.Hamburger, {
                [styles.Open]: menu,
              })}
              onClick={onClick}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          </nav>
        </div>
        <div className={styles.Right}>
          <div className={styles.Channel}>
            <div className={styles.ChannelName}>ВОРОБЬИ.TV</div>
            <div className={styles.ChannelIcon}>
              <img src={PlayIcon} alt="play" />
            </div>
          </div>
          <div className={styles.Contact}>КОНТАКТЫ</div>
        </div>
      </div>
      <div
        className={cn(styles.MobileMenu, {
          [styles.MobileMenuOpen]: menu,
        })}
      >
        <ul>
          <li>
            <a href="/">СОБЫТИЯ</a>
          </li>
          <li>
            <a href="/">УСЛУГИ</a>
          </li>
          <li>
            <a href="/">О НАС</a>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
