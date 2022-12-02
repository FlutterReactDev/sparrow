import styles from "./Header.module.css";
import Logo from "./Лого_Воробьи_вверх.png";
import Camera from "./Значок_камеры.png";
import PlayIcon from "./Кнопка_ТВ.png";
function Header() {
  return (
    <header className={styles.Header}>
      <div className={styles.Inner}>
        <div className={styles.Left}>
          <div className={styles.Logo}>
            <div className={styles.LogoElement}>
              <img src={Logo} alt="logo" />
            </div>
            <div className={styles.LogoCamera}>
              <img src={Camera} alt="camera" />
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
    </header>
  );
}

export default Header;
