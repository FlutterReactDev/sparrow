import styles from "./Calendar.module.css";
import cn from "classnames";
import ArrowLeftDark from "./ArrowLeftDark.png";
import ArrowRightDark from "./ArrowRightDark.png";
import ArrowLeftLight from "./ArrowLeftLight.png";
import ArrowRightLight from "./ArrowRightLight.png";
import { useContext } from "react";
import { ThemeContext } from "../../Theme";
function Calendar() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={styles.Calendar}>
      <div className={styles.Date}>НОЯБРЬ 2022</div>
      <div className={styles.Inner}>
        <div className={styles.Row}>
          <div className={styles.DateName}>ПН</div>
          <div className={styles.DayRow}>
            <div className={styles.Day}>31</div>
            <div className={styles.Day}>7</div>
            <div className={styles.Day}>14</div>
            <div className={styles.Day}>21</div>
            <div className={styles.Day}>28</div>
          </div>
        </div>
        <div className={styles.Row}>
          <div className={styles.DateName}>ВТ</div>
          <div className={styles.DayRow}>
            <div className={styles.Day}>1</div>
            <div className={styles.Day}>8</div>
            <div className={styles.Day}>15</div>
            <div className={styles.Day}>22</div>
            <div className={styles.Day}>29</div>
          </div>
        </div>
        <div className={styles.Row}>
          <div className={styles.DateName}>СР</div>
          <div className={styles.DayRow}>
            <div className={styles.Day}>2</div>
            <div className={styles.Day}>9</div>
            <div className={styles.Day}>16</div>
            <div className={styles.Day}>23</div>
            <div className={styles.Day}>30</div>
          </div>
        </div>
        <div className={styles.Row}>
          <div className={styles.DateName}>ЧТ</div>
          <div className={styles.DayRow}>
            <div className={cn(styles.Day, styles.CurrentDay)}>3</div>
            <div className={styles.Day}>10</div>
            <div className={styles.Day}>17</div>
            <div className={styles.Day}>24</div>
            <div className={styles.Day}>1</div>
          </div>
        </div>
        <div className={styles.Row}>
          <div className={styles.DateName}>ПТ</div>
          <div className={styles.DayRow}>
            <div className={styles.Day}>4</div>
            <div className={styles.Day}>11</div>
            <div className={styles.Day}>18</div>
            <div className={styles.Day}>25</div>
            <div className={styles.Day}>2</div>
          </div>
        </div>
        <div className={styles.Row}>
          <div className={styles.DateName}>СБ</div>
          <div className={styles.DayRow}>
            <div className={styles.Day}>5</div>
            <div className={styles.Day}>12</div>
            <div className={styles.Day}>19</div>
            <div className={styles.Day}>26</div>
            <div className={cn(styles.Day, styles.SelectedDay)}>3</div>
          </div>
        </div>
        <div className={styles.Row}>
          <div className={styles.DateName}>ВС</div>
          <div className={styles.DayRow}>
            <div className={styles.Day}>6</div>
            <div className={styles.Day}>13</div>
            <div className={styles.Day}>20</div>
            <div className={styles.Day}>27</div>
            <div className={cn(styles.Day, styles.SelectedDay)}>4</div>
          </div>
        </div>

        <div className={styles.LeftArrow}>
          {theme === "dark-theme" ? (
            <img src={ArrowLeftDark} alt="Left" />
          ) : (
            <img src={ArrowLeftLight} alt="Left" />
          )}
        </div>
        <div className={styles.RightArrow}>
          {theme === "dark-theme" ? (
            <img src={ArrowRightDark} alt="Left" />
          ) : (
            <img src={ArrowRightLight} alt="Left" />
          )}
        </div>
      </div>
      <div className={styles.MobileCalendar}>
        <div className={styles.LeftArrow}>
          {theme === "dark-theme" ? (
            <img src={ArrowLeftDark} alt="Left" />
          ) : (
            <img src={ArrowLeftLight} alt="Left" />
          )}
        </div>

        <div className={styles.Inner}>
          <div className={styles.Row}>
            <div className={styles.DateName}>ПН</div>
            <div className={styles.DayRow}>
              <div className={styles.Day}>31</div>
            </div>
          </div>
          <div className={styles.Row}>
            <div className={styles.DateName}>ВТ</div>
            <div className={styles.DayRow}>
              <div className={styles.Day}>1</div>
            </div>
          </div>
          <div className={styles.Row}>
            <div className={styles.DateName}>СР</div>
            <div className={styles.DayRow}>
              <div className={styles.Day}>2</div>
            </div>
          </div>
          <div className={styles.Row}>
            <div className={styles.DateName}>ЧТ</div>
            <div className={styles.DayRow}>
              <div className={cn(styles.Day, styles.CurrentDay)}>3</div>
            </div>
          </div>
          <div className={styles.Row}>
            <div className={styles.DateName}>ПТ</div>
            <div className={styles.DayRow}>
              <div className={styles.Day}>4</div>
            </div>
          </div>
          <div className={styles.Row}>
            <div className={styles.DateName}>СБ</div>
            <div className={styles.DayRow}>
              <div className={styles.Day}>5</div>
            </div>
          </div>
          <div className={styles.Row}>
            <div className={styles.DateName}>ВС</div>
            <div className={styles.DayRow}>
              <div className={styles.Day}>6</div>
            </div>
          </div>
        </div>
        <div className={styles.RightArrow}>
          {theme === "dark-theme" ? (
            <img src={ArrowRightDark} alt="Left" />
          ) : (
            <img src={ArrowRightLight} alt="Left" />
          )}
        </div>
      </div>
    </div>
  );
}

export default Calendar;
