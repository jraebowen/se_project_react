import "./Profile.css";
import SideBar from "./SideBar";
import ClothesSection from "./ClothesSection";

function Profile({ handleCardClick, onAddCard, clothingItems }) {
  return (
    <div className="profile">
      <section className="profile__sidebar">
        <SideBar />
      </section>
      <div className="profile__content">
        <div className="profile__content-header">
          <p className="profile__content-header_text">Your Items</p>
          <button
            className="profile__content-header_button"
            onClick={onAddCard}
          >
            + Add new
          </button>
        </div>
        <section className="profile__content_clothes-section">
          <ClothesSection
            handleCardClick={handleCardClick}
            clothingItems={clothingItems}
          />
        </section>
      </div>
    </div>
  );
}

export default Profile;
