import styles from "./SectionInfrastructure.module.css";
import Triangle from "./Triangle.png";
function SectionInfrastructure() {
  return (
    <section className={styles.Section}>
      <div className={styles.Left}>
        <div className={styles.LeftContent}>
          <h1 className={styles.Title}>ИНФРАСТРУКТУРА</h1>
          <ul className={styles.List}>
            <li>Лыжероллерные трассы</li>
            <li>Лыжные трассы</li>
            <li>Воркаут</li>
            <li>Тир</li>
            <li>Спортивный зал</li>
            <li>Конференц - зал</li>
            <li>Раздевалки, вакс-кабины</li>
          </ul>
        </div>
      </div>
      <div className={styles.Right}>
        <div className={styles.RightContent}>
          <div className={styles.TrackName}>ЛЫЖЕРОЛЛЕРНАЯ ТРАССА</div>
          <div className={styles.TrackDistance}>2500 M</div>
          <div className={styles.Triangle}>
            <img src={Triangle} alt="Element" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionInfrastructure;
