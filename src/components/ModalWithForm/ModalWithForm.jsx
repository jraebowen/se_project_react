import "./ModalWithForm.css";

function ModalWithForm({ isModalOpen, handleModalClose }) {
  return (
    <div className="form-modal" show={isModalOpen}>
      <div className="form-modal__container">
        <button
          type="button"
          className="form-modal__close-button"
          onClick={handleModalClose}
        ></button>
        <h2 className="form-modal__title">title placeholder</h2>
        <form className="form">
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
        </form>
        <button type="submit" className="form-modal__button">
          save placeholder
        </button>
      </div>
    </div>
  );
}
export default ModalWithForm;
