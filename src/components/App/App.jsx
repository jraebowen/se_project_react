import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import ItemModal from "../ItemModal/ItemModal";
import { filterWeatherData, getWeather } from "../../utils/weatherApi";
import { location, apiKey } from "../../utils/constants";
import { defaultClothingItems } from "../../utils/constants";

function App() {
  const [weatherData, setWeatherData] = useState({
    type: "",
    temp: { F: 999 },
    location: "",
  });

  const [clothingItems, setClothingItems] = useState(defaultClothingItems);

  //modal open/close functions
  const [selectedCard, setSelectedCard] = useState({});

  const [activeModal, setActiveModal] = useState("");

  const [isMobileMenuOpened, setIsMobileMenuOpened] = useState(false);

  const handleCardClick = (card) => {
    setActiveModal("item-modal");
    setSelectedCard(card);
  };

  const handleAddCard = () => {
    setActiveModal("add-garment");
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpened((prev) => !prev);
  };

  const handleModalClose = () => {
    setActiveModal(false);
  };

  useEffect(() => {
    const handleEscapeKey = (e) => {
      if (e.key === "Escape") {
        handleModalClose();
      }
    };
    if (activeModal) {
      window.addEventListener("keydown", handleEscapeKey);
    }
    return () => {
      window.removeEventListener("keydown", handleEscapeKey);
    };
  }, [activeModal, handleModalClose]);

  useEffect(() => {
    const handleClickOutsideModal = (e) => {
      if (e.target.classList.contains("modal")) {
        handleModalClose();
      }
    };
    if (activeModal) {
      window.addEventListener("mousedown", handleClickOutsideModal);
    }
    return () => {
      window.removeEventListener("mousedown", handleClickOutsideModal);
    };
  }, [activeModal, handleModalClose]);

  //weather api

  useEffect(() => {
    getWeather(location, apiKey)
      .then((data) => {
        const filteredData = filterWeatherData(data);
        setWeatherData(filteredData);
      })
      .catch((err) => {
        console.log("Failed to fetch weather data:", err);
      });
  }, []);

  //form validation functions
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm({
    mode: "onChange",
  });

  const onSubmit = () => {
    reset();
    handleModalClose();
  };

  return (
    <div className="page">
      <div className="page__content">
        <Header
          weatherData={weatherData}
          handleAddCard={handleAddCard}
          toggleMobileMenu={toggleMobileMenu}
          isMobileMenuOpened={isMobileMenuOpened}
        />
        <Main
          weatherData={weatherData}
          handleCardClick={handleCardClick}
          clothingItems={clothingItems}
        />
        <Footer />
      </div>
      <ModalWithForm
        activeModal={activeModal}
        handleModalClose={handleModalClose}
        onSubmit={onSubmit}
        handleSubmit={handleSubmit}
        isValid={isValid}
        title="New garment"
        buttonText="Add garment"
      >
        <fieldset className="form__fieldset">
          <label
            htmlFor="name-input"
            className={`form__label ${
              errors.name ? "form__label_type_error" : ""
            }`}
          >
            Name{" "}
            {errors.name && (
              <span className="form__input-error">
                (This field is required)
              </span>
            )}
          </label>
          <input
            type="text"
            className={`form__input ${
              errors.name ? "form__input_type_error" : ""
            }`}
            id="name-input"
            placeholder="Name"
            {...register("name", {
              required: true,
              minLength: 2,
              maxLength: 30,
            })}
          />
        </fieldset>
        <fieldset className="form__fieldset">
          <label
            htmlFor="image-input"
            className={`form__label ${
              errors.image ? "form__label_type_error" : ""
            }`}
          >
            Image
            {errors.image && (
              <span className="form__input-error">
                {errors.image.type === "pattern"
                  ? " (Please enter a valid image URL)"
                  : " (This field is required)"}
              </span>
            )}
          </label>
          <input
            type="url"
            className={`form__input ${
              errors.image ? "form__input_type_error" : ""
            }`}
            {...register("image", {
              required: true,
              pattern: {
                value:
                  /^https?:\/\/.*\.(jpg|jpeg|png|gif|webp|svg)(\?.*)?(#.*)?$/i,
                message: "Enter a valid image URL",
              },
            })}
            id="image-input"
            placeholder="Image URL"
          />
        </fieldset>
        <fieldset className="form__fieldset form__fieldset_radio">
          <legend
            className={`form__legend ${
              errors.weather ? "form__legend_type_error" : ""
            }`}
          >
            Select the weather type:{" "}
            {errors.weather && (
              <span className="form__input-error">
                (Please select a weather type)
              </span>
            )}
          </legend>

          <label htmlFor="hot" className="form__label form__label-radio">
            <input
              type="radio"
              className="form__input form__input_radio"
              id="hot"
              value="hot"
              name="weather"
              {...register("weather", { required: true })}
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
              {...register("weather", { required: true })}
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
              {...register("weather", { required: true })}
            />
            <span className="form__label-text">Cold</span>
          </label>
        </fieldset>
      </ModalWithForm>
      <ItemModal
        activeModal={activeModal}
        selectedCard={selectedCard}
        handleModalClose={handleModalClose}
      />
    </div>
  );
}

export default App;
