import "./Header.css";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import avatar from "../../assets/avatar.webp";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";

function Header({
  weatherData,
  onAddCard,
  toggleMobileMenu,
  isMobileMenuOpened,
}) {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  const location = weatherData.location;

  return (
    <header className="header">
      <div className="header__container">
        <div className="header__container_logo-date">
          <Link to="/">
            <img className="header__logo" src={logo} alt="WTWR logo" />
          </Link>
          <p className="header__date-location">
            {currentDate}, {location}
          </p>
        </div>
        <div className="header__container_profile-details header__container_profile-details_desktop">
          <ToggleSwitch />
          <button type="button" className="header__button" onClick={onAddCard}>
            + Add Clothes
          </button>
          <Link to="/profile" className="header__name">
            <p>Terrence Tegegne</p>{" "}
          </Link>
          <img src={avatar} alt="profile picture" className="header__avatar" />
        </div>
        {!isMobileMenuOpened && (
          <button
            type="button"
            className="header__container_profile-details header__container_profile-details_mobile-button"
            onClick={toggleMobileMenu}
          />
        )}
        {isMobileMenuOpened && (
          <div className="header__container_profile-details header__container_profile-details_mobile-modal">
            <ToggleSwitch />
            <button
              type="button"
              className="profile-modal__close-button"
              onClick={toggleMobileMenu}
            />
            <button
              type="button"
              className="header__button"
              onClick={() => {
                onAddCard();
                toggleMobileMenu();
              }}
            >
              + Add Clothes
            </button>
            <div className="header__details-mobile">
              <Link to="/profile" className="header__name">
                {" "}
                <p>Terrence Tegegne</p>
              </Link>
              <img
                src={avatar}
                alt="profile picture"
                className="header__avatar"
              />
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
