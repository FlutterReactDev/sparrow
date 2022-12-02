import Switch from "../Switch/Switch";
import styles from "./Hero.module.css";
import Meteo from "./Meteo";

function Hero() {
  return (
    <section className={styles.Hero}>
      <div className={styles.HeroContent}>
        <div className={styles.Top}>
          <Meteo />
          <Switch />
        </div>
        <div className={styles.Content}>
          <div className={styles.Text}>
            СПОРТИВНЫЙ ЛЫЖНЫЙ КЛУБ<br/> ДОСТУПНЫЙ КАЖДОМУ
          </div>
          <button className={styles.Button}>ПОДРОБНЕЕ</button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
