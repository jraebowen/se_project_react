import "./ItemModal.css";

function ItemModal({ handleModalClose }) {
  return (
    <div className="item-modal">
      <button
        type="button"
        className="form-modal__close-button"
        onClick={handleModalClose}
      ></button>
      <img src="" alt="" className="item-modal__image" />
      <h2 className="item-modal__title">text</h2>
      <p className="item-modal__weather">text</p>
    </div>
  );
}

export default ItemModal;
