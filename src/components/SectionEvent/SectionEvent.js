import Calendar from "../Calendar/Calendar";
import styles from "./SectionEvent.module.css";
import Triangle from "./triangle.png";
function SectionEvent() {
  return (
    <section className={styles.Section}>
      <div className={styles.Left}>
        <div className={styles.Content}>
          <h1 className={styles.Title}>СОБЫТИЯ</h1>
          <div className={styles.LeftDate}>3 ноября 2022</div>
          <div className={styles.Events}>
            Сегодня: <br />
            нет событий
          </div>
        </div>
      </div>
      <div className={styles.Right}>
        <div className={styles.RightContent}>
          <Calendar />
          <div className={styles.Triangle}>
            <img src={Triangle} alt="Element" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionEvent;
