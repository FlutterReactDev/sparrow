import styles from "./SectionContact.module.css";
import Schema from "./Schema.png";
import Location from "./Location.png";
function SectionContact() {
  return (
    <section className={styles.Section}>
      <div className={styles.Left}>
        <div className={styles.Title}>КОНТАКТЫ</div>
        <div className={styles.LeftContent}>
          <div className={styles.Address}>
            <div className={styles.AddressItem}>
              <div className={styles.AddressName}>Адресс:</div>
              <div className={styles.AddressValue}>
                Красноярский край, п. Подгорный, ул. Черемуховая
              </div>
            </div>
            <div className={styles.AddressItem}>
              <div className={styles.AddressName}>Телефон:</div>
              <div className={styles.AddressValue}>+7 913 172 97 92</div>
            </div>
            <div className={styles.AddressItem}>
              <div className={styles.AddressName}>E-mail:</div>
              <div className={styles.AddressValue}>info@vorobi.ski</div>
            </div>
            <div className={styles.AddressItem}>
              <div className={styles.AddressName}>Как проехать:</div>
              <div className={styles.AddressImg}>
                <img src={Schema} alt="Schema" />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.Coords}>
          <div className={styles.CoordsData}>
            <div className={styles.CoordsX}>56.117347</div>
            <div className={styles.CoordsY}>93.441942</div>
          </div>
          <div className={styles.CoordsIcon}>
            <img src={Location} alt="Location" />
          </div>
        </div>
      </div>
      <div className={styles.Right}>
        <div className={styles.FormTitle}>ОБРАТНАЯ СВЯЗЬ</div>
        <form>
          <input className={styles.Input} placeholder="Имя" />
          <input className={styles.Input} placeholder="Организация" />
          <input className={styles.Input} placeholder="Телефон" />
          <input className={styles.Input} placeholder="E-mail" />
          <textarea className={styles.Textarea}></textarea>
          <div className={styles.Btn}>
            <button className={styles.Button}>ОТПРАВИТЬ</button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default SectionContact;
