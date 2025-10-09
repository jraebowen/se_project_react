import "./AddItemModal.css";
import { useState, useEffect } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const AddItemModal = ({ isOpen, onClose, onAddItem }) => {
  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [weather, setWeather] = useState("");
  const [error, setError] = useState({});

  //clear results when opening modal
  useEffect(() => {
    if (isOpen) {
      setName("");
      setImageUrl("");
      setWeather("");
      setError({});
    }
  }, [isOpen]);

  //form input functions
  const handleNameChange = (e) => {
    const { value } = e.target;
    setName(value);
    validateField("name", value);
  };

  const handleImageUpload = (e) => {
    const { value } = e.target;
    setImageUrl(value);
    validateField("imageUrl", value);
  };

  const handleWeatherSelection = (e) => {
    const { value } = e.target;
    setWeather(value);
    validateField("weather", value);
  };

  //validation
  const validateField = (input, value) => {
    let error = "";
    if (!value) {
      error = "This is a required field";
    } else if (input === "name" && (value.length < 2 || value.length > 30)) {
      error = "This is a required field";
    } else if (input === "imageUrl") {
      const url = /^(ftp|http|https):\/\/[^ "]+$/;
      if (!url.test(value)) {
        error = "Enter a valid image URL";
      }
    }
    setError((prev) => ({
      ...prev,
      [input]: error,
    }));
  };

  const validateForm = () => {
    if (error.name === "" && error.imageUrl === "" && error.weather === "") {
      return true;
    }
  };

  //form submission function
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      name,
      imageUrl,
      weather,
    };
    onAddItem(newItem);
  };

  return (
    <ModalWithForm
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleFormSubmit}
      onValidation={validateForm}
      title="New garment"
      buttonText="Add garment"
    >
      <fieldset className="form__fieldset">
        <label htmlFor="name-input" className="form__label">
          Name{" "}
          {error.name && (
            <span className="form__input-error">{error.name}</span>
          )}
        </label>
        <input
          type="text"
          className="form__input"
          id="name-input"
          placeholder="Name"
          onChange={handleNameChange}
          value={name}
        />
      </fieldset>
      <fieldset className="form__fieldset">
        <label htmlFor="image-input" className="form__label">
          Image{" "}
          {error.imageUrl && (
            <span className="form__input-error">{error.imageUrl}</span>
          )}
        </label>
        <input
          type="url"
          className="form__input"
          id="image-input"
          placeholder="Image URL"
          onChange={handleImageUpload}
          value={imageUrl}
        />
      </fieldset>
      <fieldset className="form__fieldset form__fieldset_radio">
        <legend className="form__legend">
          Select the weather type:{" "}
          {error.weather && (
            <span className="form__input-error">{error.weather}</span>
          )}
        </legend>

        <label htmlFor="hot" className="form__label form__label-radio">
          <input
            type="radio"
            className="form__input form__input_radio"
            id="hot"
            value="hot"
            name="weather"
            onChange={handleWeatherSelection}
            checked={weather === "hot"}
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
            onChange={handleWeatherSelection}
            checked={weather === "warm"}
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
            onChange={handleWeatherSelection}
            checked={weather === "cold"}
          />
          <span className="form__label-text">Cold</span>
        </label>
      </fieldset>
    </ModalWithForm>
  );
};
export default AddItemModal;
