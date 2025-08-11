import "./ModalWithForm.css";

function ModalWithForm({
  children,
  buttonText,
  title,
  isOpen,
  handleModalClose,
  handleSubmit,
  onSubmit,
  isValid,
}) {
  return (
    <div className={`modal ${isOpen && "modal__is-opened"}`}>
      <div className="form-modal__container">
        <button
          type="button"
          className="form-modal__close-button"
          onClick={handleModalClose}
        />
        <h2 className="form-modal__title">{title}</h2>
        <form className="form" noValidate onSubmit={handleSubmit(onSubmit)}>
          {children}

          <button
            type="submit"
            className="form-modal__button"
            disabled={!isValid}
          >
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
