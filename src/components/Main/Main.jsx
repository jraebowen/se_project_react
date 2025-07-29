import "./Main.css";
import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCard from "../ItemCard/ItemCard";

function Main() {
  return (
    <main className="main">
      <WeatherCard />
      <section className="cards">
        <p className="cards__text">Today is XXX / You may want to wear:</p>
        <ItemCard />
      </section>
    </main>
  );
}

export default Main;
