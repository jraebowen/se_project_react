import "./Profile.css";
import SideBar from "./SideBar";
import ClothesSection from "./ClothesSection";

function Profile({
  handleCardClick,
  onAddCard,
  clothingItems,
  onEditProfile,
  onCardLike,
  onLogout,
  isLoggedIn,
}) {
  return (
    <div className="profile">
      <section className="profile__sidebar">
        <SideBar onEditProfile={onEditProfile} onLogout={onLogout} />
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
            onCardLike={onCardLike}
            isLoggedIn={isLoggedIn}
          />
        </section>
      </div>
    </div>
  );
}

export default Profile;
