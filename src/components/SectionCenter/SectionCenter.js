import SliderCarousel from "../Slider/Slider";
import styles from "./SectionCenter.module.css";
import Triangle from "./triangle.png";
import img1 from "./img1.jpg";
import img2 from "./img2.jpg";
import img3 from "./img3.jpg";
import img4 from "./img4.jpg";

function SectionCenter() {
  return (
    <section className={styles.Section}>
      <h1 className={styles.Title}>ПРЕСС-ЦЕНТР</h1>
      <SliderCarousel>
        <div className={styles.SliderItem}>
          <div className={styles.SectionContainer}>
            <div className={styles.Left}>
              <div className={styles.LeftContent}>
                <div className={styles.Date}>30 ОКТЯБРЯ 2022</div>

                <div className={styles.Subtitle}>ЗРИТЕЛЬСКИЙ ВИДЕОЭКРАН</div>
                <div className={styles.Text}>
                  Короткий видео-отчет тестирования спортивного экрана на лыжном
                  стадионе «Воробьи» www.vorobi.ski (п.Подгорный). Лыжный
                  стадион «Воробьи» первый в частный стадион в Красноярском Крае
                  получивший о мологацию лыжных трасс от Федерации лыжных гонок
                  России #timingweb #vorobi #timing #tv
                </div>
              </div>
            </div>
            <div className={styles.Right}>
              <div className={styles.RightContent}>
                <img src={img1} />
                <div className={styles.Triangle}>
                  <img src={Triangle} alt="Element" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.SliderItem}>
          <div className={styles.SectionContainer}>
            <div className={styles.Left}>
              <div className={styles.LeftContent}>
                <div className={styles.Date}>30 ОКТЯБРЯ 2022</div>

                <div className={styles.Subtitle}>ЗРИТЕЛЬСКИЙ ВИДЕОЭКРАН</div>
                <div className={styles.Text}>
                  Короткий видео-отчет тестирования спортивного экрана на лыжном
                  стадионе «Воробьи» www.vorobi.ski (п.Подгорный). Лыжный
                  стадион «Воробьи» первый в частный стадион в Красноярском Крае
                  получивший о мологацию лыжных трасс от Федерации лыжных гонок
                  России #timingweb #vorobi #timing #tv
                </div>
              </div>
            </div>
            <div className={styles.Right}>
              <div className={styles.RightContent}>
                <img src={img3} />
                <div className={styles.Triangle}>
                  <img src={Triangle} alt="Element" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.SliderItem}>
          <div className={styles.SectionContainer}>
            <div className={styles.Left}>
              <div className={styles.LeftContent}>
                <div className={styles.Date}>30 ОКТЯБРЯ 2022</div>

                <div className={styles.Subtitle}>ЗРИТЕЛЬСКИЙ ВИДЕОЭКРАН</div>
                <div className={styles.Text}>
                  Короткий видео-отчет тестирования спортивного экрана на лыжном
                  стадионе «Воробьи» www.vorobi.ski (п.Подгорный). Лыжный
                  стадион «Воробьи» первый в частный стадион в Красноярском Крае
                  получивший о мологацию лыжных трасс от Федерации лыжных гонок
                  России #timingweb #vorobi #timing #tv
                </div>
              </div>
            </div>
            <div className={styles.Right}>
              <div className={styles.RightContent}>
                <img src={img4} />
                <div className={styles.Triangle}>
                  <img src={Triangle} alt="Element" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </SliderCarousel>
    </section>
  );
}

export default SectionCenter;
