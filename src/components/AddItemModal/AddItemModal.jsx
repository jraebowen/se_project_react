import "./AddItemModal.css";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

// onAddItem refers to handleAddItemSubmit, which is declared in App.js
const AddItemModal = ({ isOpen, onClose, onAddItem }) => {
  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [weather, setWeather] = useState("");

  //clear results when opening modal
  useEffect(() => {
    if (isOpen) {
      setName("");
      setImageUrl("");
      setWeather("");
    }
  }, [isOpen]);

  //form input functions
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleImageUpload = (e) => {
    setImageUrl(e.target.value);
  };

  const handleWeatherSelection = (e) => {
    setWeather(e.target.value);
  };

  //form submission function
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      name,
      link: imageUrl,
      weather,
      _id: uuidv4(),
    };
    onAddItem(newItem);
  };

  return (
    <ModalWithForm
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleFormSubmit}
      title="New garment"
      buttonText="Add garment"
    >
      <fieldset className="form__fieldset">
        <label htmlFor="name-input" className="form__label">
          Name{" "}
          {/* {errors.name && (
            <span className="form__input-error">(This field is required)</span>
          )} */}
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
          Image
          {/* {errors.image && (
            <span className="form__input-error">
              {errors.image.type === "pattern"
                ? " (Please enter a valid image URL)"
                : " (This field is required)"}
            </span>
          )} */}
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
          {/* {errors.weather && (
            <span className="form__input-error">
              (Please select a weather type)
            </span>
          )} */}
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
