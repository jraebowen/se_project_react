import { useState, useEffect } from "react";
import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
// import ItemModal from "../ItemModal/ItemModal";
import { filterWeatherData, getWeather } from "../../utils/weatherAPI";
import { location, apiKey } from "../../utils/constants";

function App() {
  const [weatherData, setWeatherData] = useState({
    type: "",
    temp: { F: 999 },
    location: "",
  });

  const [activeModal, setActiveModal] = useState("");

  const handleModalOpen = () => {
    setActiveModal(true);
  };

  const handleModalClose = () => {
    setActiveModal(false);
  };

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
        <ModalWithForm
          activeModal={activeModal}
          title="New garment"
          buttonText="Add garment"
        >
          <fieldset className="form__fieldset">
            <label htmlFor="name-input" className="form__label">
              Name
            </label>
            <input
              type="text"
              className="form__input"
              id="name-input"
              placeholder="Name"
              minLength="2"
              maxLength="30"
              required
            />
          </fieldset>
          <fieldset className="form__fieldset">
            <label htmlFor="image-input" className="form__label">
              Image
            </label>
            <input
              type="url"
              className="form__input"
              id="image-input"
              placeholder="Image URL"
              minLength="2"
              maxLength="30"
              required
            />
          </fieldset>
          <fieldset className="form__fieldset form__fieldset_radio">
            <legend className="form__legend">Select the weather type:</legend>
            <label htmlFor="hot" className="form__label form__label-radio">
              <input
                type="radio"
                className="form__input form__input_radio form__label-radio"
                id="hot"
                value="hot"
                name="weather"
                required
              />
              <span className="form__label-text">Hot</span>
            </label>
            <label htmlFor="warm" className="form__label form__label-radio">
              <input
                type="radio"
                className="form__input form__input_radio"
                id="warm"
                value="warm"
                name="weather"
                required
              />
              <span className="form__label-text">Warm</span>
            </label>
            <label htmlFor="cold" className="form__label form__label-radio">
              <input
                type="radio"
                className="form__input form__input_radio"
                id="cold"
                value="cold"
                name="weather"
                required
              />
              <span className="form__label-text">Cold</span>
            </label>
          </fieldset>
        </ModalWithForm>
      </div>
    </>
  );
}

export default App;
