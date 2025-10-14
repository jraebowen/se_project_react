import { useEffect } from "react";
import { useFormAndValidation } from "../../hooks/useFormAndValidation";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const AddItemModal = ({ isOpen, onClose, onAddItem, onLoad }) => {
  //validation
  const { values, handleChange, errors, isValid, setValues, resetForm } =
    useFormAndValidation();

  //clear results when opening modal and set initial values when modal opens
  useEffect(() => {
    if (isOpen) {
      resetForm();
      setValues({
        name: "",
        imageUrl: "",
        weather: "",
      });
    }
  }, [isOpen, resetForm, setValues]);

  //form submission function
  const handleFormSubmit = (e) => {
    e.preventDefault();
    onAddItem(values);
  };

  return (
    <ModalWithForm
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleFormSubmit}
      onValidation={() => isValid}
      onLoad={onLoad}
      title="New garment"
      buttonText="Add garment"
    >
      <fieldset className="form__fieldset">
        <label htmlFor="name-input" className="form__label">
          Name{" "}
          {errors.name && (
            <span className="form__input-error">{errors.name}</span>
          )}
        </label>
        <input
          type="text"
          className="form__input"
          id="name-input"
          name="name"
          placeholder="Name"
          onChange={handleChange}
          value={values.name || ""}
        />
      </fieldset>
      <fieldset className="form__fieldset">
        <label htmlFor="image-input" className="form__label">
          Image{" "}
          {errors.imageUrl && (
            <span className="form__input-error">{errors.imageUrl}</span>
          )}
        </label>
        <input
          type="url"
          className="form__input"
          id="image-input"
          name="imageUrl"
          placeholder="Image URL"
          onChange={handleChange}
          value={values.imageUrl || ""}
        />
      </fieldset>
      <fieldset className="form__fieldset form__fieldset_radio">
        <legend className="form__legend">
          Select the weather type:{" "}
          {errors.weather && (
            <span className="form__input-error">{errors.weather}</span>
          )}
        </legend>

        <label htmlFor="hot" className="form__label form__label-radio">
          <input
            type="radio"
            className="form__input form__input_radio"
            id="hot"
            value="hot"
            name="weather"
            onChange={handleChange}
            checked={values.weather === "hot"}
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
            onChange={handleChange}
            checked={values.weather === "warm"}
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
            onChange={handleChange}
            checked={values.weather === "cold"}
          />
          <span className="form__label-text">Cold</span>
        </label>
      </fieldset>
    </ModalWithForm>
  );
};
export default AddItemModal;
