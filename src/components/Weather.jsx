import { useEffect, useState } from "react";

const Weather = () => {
  let [weatherData, setWeatherData] = useState(null);
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

            if (!response.ok) {
              throw new Error("Failed to fetch weather data");
            }

            const data = await response.json();
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
    <div>
      <h2>Weather at your location</h2>
      {weatherData ? (
        <div>
          <p>{weatherData.name}</p>
          <p>Temp: {weatherData.main.temp}°C</p>
          <p>Condition: {weatherData.weather[0].description}</p>
          <img
            src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
            alt="weather icon"
          />
        </div>
      ) : (
        <p>Loading weather...</p>
      )}
    </div>
  );
};

export default Weather;
