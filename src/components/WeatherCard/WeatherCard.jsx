import "./WeatherCard.css";
import cloudy from "../../assets/weathercardimages-day/cloudy.webp";

function WeatherCard({ weatherData }) {
  return (
    <section className="weather-card">
      <p className="weather-card__temp">{weatherData.temp.F}°F</p>
      <img src={cloudy} alt="" className="weather-card__image" />
    </section>
  );
}

export default WeatherCard;
