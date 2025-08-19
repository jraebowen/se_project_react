import "./ItemModal.css";

function ItemModal({ activeModal, selectedCard, OnClose }) {
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
          onClick={OnClose}
        />
        <img
          src={selectedCard.link}
          alt={selectedCard.name}
          className="item-modal__image"
        />
        <div className="item-modal__content">
          <h2 className="item-modal__title">{selectedCard.name}</h2>
          <p className="item-modal__weather">Weather: {selectedCard.weather}</p>
        </div>
      </div>
    </div>
  );
}

export default ItemModal;
