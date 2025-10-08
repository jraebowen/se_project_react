import "./ItemModal.css";
import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";

function ItemModal({ activeModal, selectedCard, onClose, onDeleteClick }) {
  const { currentUser } = useContext(CurrentUserContext);

  return (
    <div
      className={`item-modal ${
        activeModal === "item-modal" && "item-modal__is-opened"
      }`}
    >
      <div className="item-modal__container">
        <button
          type="button"
          className="item-modal__close-button"
          onClick={onClose}
        />
        <img
          src={selectedCard.imageUrl}
          alt={selectedCard.name}
          className="item-modal__image"
        />
        <div className="item-modal__text">
          <div className="item-modal__content">
            <h2 className="item-modal__title">{selectedCard.name}</h2>
            <p className="item-modal__weather">
              Weather: {selectedCard.weather}
            </p>
          </div>
          <button
            type="button"
            className="item-modal__delete-btn"
            onClick={() => onDeleteClick(selectedCard)}
          >
            Delete Item
          </button>
        </div>
      </div>
    </div>
  );
}

export default ItemModal;
