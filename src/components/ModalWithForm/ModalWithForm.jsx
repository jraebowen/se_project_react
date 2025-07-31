import "./ModalWithForm.css";

function ModalWithForm() {
  return (
    <div className="form-modal">
      <div className="form-modal__container">
        <button type="button" className="form-modal__close-button"></button>
        <h2 className="form-modal__title">title placeholder</h2>
        <form className="form">
          <fieldset className="form__fieldset">
            <label htmlFor="name-input" className="form__label"></label>
            <input
              type="text"
              className="form__input"
              placehodler="Name"
              minLength="2"
              maxLength="30"
              required
            />
          </fieldset>
          <button className="form-modal__button">save placeholder</button>
        </form>
      </div>
    </div>
  );
}
export default ModalWithForm;
