import "./WeatherCard.css";
import { weatherImages } from "../../utils/constants";
const defaultWeatherImage = new URL(
  "../../assets/default.webp",
  import.meta.url
).href;

function WeatherCard({ weatherData }) {
  const filteredOptions = weatherImages.filter((item) => {
    return (
      item.day === weatherData.isDay && item.condition === weatherData.condition
    );
  });

  const weatherOption = filteredOptions[0]?.image || defaultWeatherImage;

  return (
    <section className="weather-card">
      <p className="weather-card__temp">{weatherData.temp.F}°F</p>
      <img src={weatherOption} alt="" className="weather-card__image" />
    </section>
  );
}

export default WeatherCard;
