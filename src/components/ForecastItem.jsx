import styles from "./ForecastItem.module.css";

const ForecastItem = ({ date, condition, icon }) => {
  const newDate = date;
  const newIcon = icon;
  const newCondition = condition;

  return (
    <div>
      <img
        src={`https://openweathermap.org/img/wn/${newIcon}@2x.png`}
        alt="weather icon"
        className={styles["forecast-image"]}
      />
      <p className={styles.text}>{newCondition}</p>
      <p className={styles.text}>{newDate}</p>
    </div>
  );
};

export default ForecastItem;
