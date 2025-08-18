import "./Profile.css";
import SideBar from "./SideBar";
import ClothesSection from "./ClothesSection";

function Profile({ handleCardClick }) {
  return (
    <div className="profile">
      <section className="profile__sidebar">
        <SideBar />
      </section>
      <div className="profile__content">
        <div className="profile__content-header">
          <p className="profile__content-header_text">Your Items</p>
          <button className="profile__content-header_button">+ Add new</button>
        </div>
        <section className="profile__clothes-section">
          <ClothesSection handleCardClick={handleCardClick} />
        </section>
      </div>
    </div>
  );
}

export default Profile;
