import "./ModalWithForm.css";
import useModalClose from "../../hooks/modalEscAndOverlay";

function ModalWithForm({
  children,
  buttonText,
  title,
  isOpen,
  onClose,
  onSubmit,
  onValidation,
  secondaryButton,
  onLoad,
}) {
  useModalClose(isOpen, onClose);
  return (
    <div className={`modal ${isOpen && "modal__is-opened"}`}>
      <div className="form-modal__container">
        <button
          type="button"
          className="form-modal__close-button"
          onClick={onClose}
        />
        <h2 className="form-modal__title">{title}</h2>
        <form className="form" onSubmit={onSubmit}>
          {children}

          <button
            type="submit"
            className="form-modal__button"
            disabled={!onValidation() || onLoad}
          >
            {onLoad ? "Saving..." : buttonText}
          </button>
          {secondaryButton}
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
