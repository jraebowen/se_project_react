import "./ItemCard.css";
import tshirt from "../../assets/t-shirt.png";

function ItemCard() {
  return (
    <>
      <section className="item-card">
        <p className="item-card__title">T-Shirt</p>
        <img src={tshirt} alt="" className="item-card__image" />
      </section>
    </>
  );
}

export default ItemCard;
