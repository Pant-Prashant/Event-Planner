import { useEffect, useState } from "react";
import styles from "./Weather.module.css";
import ForecastItem from "./ForecastItem";

const Weather = () => {
  const capitalizeWords = (str) => {
    return str
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "long",
    });
  }

  let [weatherData, setWeatherData] = useState(null);
  let [dailyForcast, setDailyForcast] = useState(null);
  const apiKey = "8d14323f896a49f818fb5c19466fe5a5";

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;

          try {
            const response = await fetch(
              `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`
            );
            const forecastFetch = await fetch(
              `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`
            );

            if (!response.ok && !forecastFetch.ok) {
              throw new Error("Failed to fetch weather data");
            }

            const data = await response.json();
            const forecastFetchData = await forecastFetch.json();

            const dailyForcastList = forecastFetchData.list
              .filter((item) => item.dt_txt.includes("12:00:00"))
              .slice(1);
            setDailyForcast(dailyForcastList);

            setWeatherData(data);
          } catch (error) {
            console.error("Weather API error:", error);
          }
        },
        (error) => {
          console.warn("Location access denied or failed:", error.message);
        }
      );
    } else {
      console.warn("Geolocation is not supported by this browser.");
    }
  }, []);

  return (
    <div className={styles["weather-div"]}>
      {weatherData ? (
        <>
          <div className={styles["current-weather"]}>
            <p className={styles["weather-heading"]}>Weather</p>
            <p>{weatherData.name}</p>
            <p>Temp: {weatherData.main.temp}°C</p>
            <p>
              Condition: {capitalizeWords(weatherData.weather[0].description)}
            </p>
            <img
              src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
              alt="weather icon"
              className={styles["weather-image"]}
            />
          </div>
          <div className={styles["forecast-div"]}>
            <p className={styles["forecast-heading"]}>Forecast</p>
            <div className={styles["forcast-item-list"]}>
              {dailyForcast.map((item) => (
                <ForecastItem
                  date={formatDate(item.dt_txt)}
                  condition={capitalizeWords(item.weather[0].description)}
                  icon={item.weather[0].icon}
                />
              ))}
            </div>
          </div>
        </>
      ) : (
        <p className={styles["loading-text"]}>Loading weather...</p>
      )}
    </div>
  );
};

export default Weather;
