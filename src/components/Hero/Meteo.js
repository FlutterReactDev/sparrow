import { useEffect, useState } from "react";
import styles from "./Hero.module.css";
import axios from "axios";

function Meteo() {
  const [data, setData] = useState({
    air: null,
    snow: null,
    humidity: null,
    wind: null,
  });
  useEffect(() => {
    axios.get("http://meteo.shopping24.su:8080/ml.php").then((response) => {
      console.log(response);
      const splitData = response.data.split(" ");
      const splitTable = splitData[splitData.length - 1]
        .split("<td></td>")[0]
        .split("<tr>")[1]
        .split("</td>");

      setData({
        air: splitTable[1].substring(4),
        snow: splitTable[2].substring(4),
        humidity: splitTable[3].substring(4, 8),
        wind: splitTable[4].substring(4, 7),
      });
    });
  }, []);

  console.log(data);
  return (
    <div className={styles.Meteo}>
      <div className={styles.MeteoIcon}>{data.air}&deg;C</div>
      <div className={styles.MeteoInfo}>
        <div className={styles.MeteoNames}>
          <div className={styles.MeteoName}>t снег:</div>
          <div className={styles.MeteoName}>влаж:</div>
          <div className={styles.MeteoName}>ветер:</div>
        </div>
        <div className={styles.MeteoValues}>
          <div className={styles.MeteoValue}>{data.snow}&deg;C</div>
          <div className={styles.MeteoValue}>{data.humidity}%</div>
          <div className={styles.MeteoValue}>{data.wind}м/с</div>
        </div>
      </div>
    </div>
  );
}

export default Meteo;
