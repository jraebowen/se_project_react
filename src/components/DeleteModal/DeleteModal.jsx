import "./DeleteModal.css";

function DeleteModal({ activeModal, onClose, onCardDelete, selectedCard }) {
  return (
    <div
      className={`delete-modal ${
        activeModal === "delete-modal" && "delete-modal__is-opened"
      }`}
    >
      <div className="delete-modal__container">
        <button
          type="button"
          className="delete-modal__close-button"
          onClick={onClose}
        />
        <div className="delete-modal__content">
          <p className="delete-modal__text">
            Are you sure you want to delete this item? <br />
            This action is irreversible
          </p>
          <button
            type="button"
            className="delete-modal__buttons delete-modal__buttons-confirm"
            onClick={() => onCardDelete(selectedCard)}
          >
            Yes, delete item
          </button>
          <button
            type="button"
            className="delete-modal__buttons delete-modal__buttons-cancel"
            onClick={onClose}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeleteModal;
