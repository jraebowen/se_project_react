import "./ModalWithForm.css";

function ModalWithForm() {
  return (
    <div className="form-modal">
      <button type="button" className="form-modalmodal__close-button"></button>
      <h2 className="form-modal__title">t</h2>
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
        <button className="form__button"></button>
      </form>
    </div>
  );
}
export default ModalWithForm;
