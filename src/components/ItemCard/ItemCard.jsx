import "./ItemCard.css";

function ItemCard({ item, handleCardClick }) {
  const onCardClick = () => {
    handleCardClick(item);
  };
  return (
    <li className="item-card">
      <h2 className="item-card__title">{item.name}</h2>
      <img
        src={item.link}
        alt={item.name}
        className="item-card__image"
        onClick={onCardClick}
      ></img>
    </li>
  );
}

export default ItemCard;
