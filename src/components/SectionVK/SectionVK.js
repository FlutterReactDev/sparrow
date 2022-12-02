import styles from "./SectionVK.module.css";
import img1 from "./img1.png";
import img2 from "./img2.png";
import img3 from "./img3.png";
import img4 from "./img4.png";
import img5 from "./img5.png";
import Triangle from "./Triangle.png";
import Like from "./Like.png";
function SectionVK() {
  return (
    <section className={styles.Section}>
      <div className={styles.Title}>ВКОНТАКТЕ</div>
      <div className={styles.Content}>
        <div className={styles.Name}>@vorobi.ski</div>
        <div className={styles.Gallery}>
          <div className={styles.GalleryItem1}>
            <img src={img1} className={styles.GalleryImg} />
            <div className={styles.Like}>
              <div className={styles.LikeIcon}>
                <img src={Like} alt="" />
              </div>
              <div className={styles.Count}>13</div>
            </div>
          </div>
          <div className={styles.GalleryItem2}>
            <img src={img2} className={styles.GalleryImg} />
            <div className={styles.Like}>
              <div className={styles.LikeIcon}>
                <img src={Like} alt="" />
              </div>
              <div className={styles.Count}>24</div>
            </div>
          </div>
          <div className={styles.GalleryItem3}>
            <img src={img3} className={styles.GalleryImg} />
            <div className={styles.Like}>
              <div className={styles.LikeIcon}>
                <img src={Like} alt="" />
              </div>
              <div className={styles.Count}>56</div>
            </div>
          </div>
          <div className={styles.GalleryItem4}>
            <img src={img4} className={styles.GalleryImg} />
            <div className={styles.Like}>
              <div className={styles.LikeIcon}>
                <img src={Like} alt="" />
              </div>
              <div className={styles.Count}>40</div>
            </div>
          </div>
          <div className={styles.GalleryItem5}>
            <img src={img5} className={styles.GalleryImg} />
            <div className={styles.Like}>
              <div className={styles.LikeIcon}>
                <img src={Like} alt="" />
              </div>
              <div className={styles.Count}>72</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.Triangle}>
        <img src={Triangle} alt="" />
      </div>
    </section>
  );
}

export default SectionVK;
