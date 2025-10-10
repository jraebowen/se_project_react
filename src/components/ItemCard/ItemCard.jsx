import "./ItemCard.css";
import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";

function ItemCard({ item, handleCardClick, onCardLike }) {
  const { currentUser } = useContext(CurrentUserContext);

  const onCardClick = () => {
    handleCardClick(item);
  };

  // Check if the item was liked by the current user
  // The likes array should be an array of ids
  const isLiked = item.likes.some((id) => id === currentUser._id);

  const handleLike = () => {
    onCardLike({ _id: item._id, isLiked });
  };

  // Create a variable which you then set in `className` for the like button
  const itemLikeButtonClassName = `item-card__like-button ${
    isLiked ? "item-card__like-button_active" : ""
  }`;

  return (
    <li className="item-card">
      <div className="item-card__header">
        <h2 className="item-card__title">{item.name}</h2>
        <button
          type="button"
          className={itemLikeButtonClassName}
          onClick={handleLike}
        ></button>
      </div>
      <img
        src={item.imageUrl}
        alt={item.name}
        className="item-card__image"
        onClick={onCardClick}
      />
    </li>
  );
}

export default ItemCard;
