import "./WeatherCard.css";
import cloudy from "../../assets/weathercardimages-day/cloudy.webp";

function WeatherCard() {
  return (
    <section className="weather-card">
      <p className="weather-card__temp">75 F</p>
      <img src={cloudy} alt="" className="weather-card__image" />
    </section>
  );
}

export default WeatherCard;
