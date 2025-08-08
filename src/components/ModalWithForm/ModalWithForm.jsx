import "./ModalWithForm.css";

function ModalWithForm({
  children,
  buttonText,
  title,
  activeModal,
  handleModalClose,
  handleSubmit,
  onSubmit,
}) {
  return (
    <div
      className={`modal ${activeModal === "add-garment" && "modal__is-opened"}`}
    >
      <div className="form-modal__container">
        <button
          type="button"
          className="form-modal__close-button"
          onClick={handleModalClose}
        ></button>
        <h2 className="form-modal__title">{title}</h2>
        <form className="form" noValidate onSubmit={handleSubmit(onSubmit)}>
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
