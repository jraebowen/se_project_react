import "./ClothesSection.css";
import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import ItemCard from "../ItemCard/ItemCard";

function ClothesSection({ handleCardClick, clothingItems, onCardLike }) {
  const { currentUser } = useContext(CurrentUserContext);

  return (
    <div className="clothes-section">
      <ul className="cards__list">
        {clothingItems.map((item) => {
          const isOwn = item.owner === currentUser._id;
          return (
            isOwn && (
              <ItemCard
                key={item._id}
                item={item}
                handleCardClick={handleCardClick}
                onCardLike={onCardLike}
              />
            )
          );
        })}
      </ul>
    </div>
  );
}
export default ClothesSection;
