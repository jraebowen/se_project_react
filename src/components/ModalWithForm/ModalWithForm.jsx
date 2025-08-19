import "./ModalWithForm.css";

function ModalWithForm({
  children,
  buttonText,
  title,
  isOpen,
  onClose,
  onSubmit,
}) {
  return (
    <div className={`modal ${isOpen && "modal__is-opened"}`}>
      <div className="form-modal__container">
        <button
          type="button"
          className="form-modal__close-button"
          onClick={onClose}
        />
        <h2 className="form-modal__title">{title}</h2>
        <form className="form" noValidate onSubmit={onSubmit}>
          {children}

          <button type="submit" className="form-modal__button">
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
