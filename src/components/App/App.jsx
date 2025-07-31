import { useState, useEffect } from "react";
import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
// import ModalWithForm from "../ModalWithForm/ModalWithForm";
// import ItemModal from "../ItemModal/ItemModal";
import { filterWeatherData, getWeather } from "../../utils/weatherAPI";
import { location, apiKey } from "../../utils/constants";

function App() {
  const [weatherData, setWeatherData] = useState({
    type: "",
    temp: { F: 999 },
    location: "",
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    getWeather(location, apiKey)
      .then((data) => {
        console.log(data);
        const filteredData = filterWeatherData(data);
        setWeatherData(filteredData);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div className="page">
        <div className="page__content">
          <Header weatherData={weatherData} />
          <Main weatherData={weatherData} />
          <Footer />
        </div>
        <ModalWithForm />
      </div>
    </>
  );
}

export default App;
