import { useState, useEffect } from "react";
import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
// import ModalWithForm from "../ModalWithForm/ModalWithForm";
// import ItemModal from "../ItemModal/ItemModal";
import { getWeather } from "../../utils/weatherAPI";
import { location, apiKey } from "../../utils/constants";

function App() {
  const [weatherData, setWeatherData] = useState({
    type: "hot",
    temp: { F: 999, C: 999 },
  });

  useEffect(() => {
    getWeather(location, apiKey)
      .then((data) => {
        if (data.main.temp >= 86) {
          return "hot";
        } else if (data.main.temp >= 66) {
          return "warm";
        } else {
          return "cold";
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div className="page">
        <div className="page__content">
          <Header />
          <Main weatherData={weatherData} />
          <Footer />
        </div>
        <ModalWithForm />
      </div>
    </>
  );
}

export default App;
