import "./Header.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import logo from "../../assets/logo.svg";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import CurrentUserContext from "../../contexts/CurrentUserContext";

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

  const { currentUser } = useContext(CurrentUserContext);

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
            <p>{currentUser.name}</p>
          </Link>
          <Link to="/profile" className="header__avatar">
            {currentUser.avatar ? (
              <img
                src={currentUser.avatar}
                alt={currentUser.name.slice(0, 1)}
                className="header__avatar"
              />
            ) : (
              <div className="header__avatar header__avatar-placeholder">
                {currentUser.name?.slice(0, 1).toUpperCase() || "U"}
              </div>
            )}
          </Link>
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
                <p>{currentUser.name}</p>
              </Link>
              {currentUser.avatar ? (
                <img
                  src={currentUser.avatar}
                  alt={currentUser.name.slice(0, 1)}
                  className="header__avatar"
                />
              ) : (
                <div className="header__avatar header__avatar-placeholder">
                  {currentUser.name?.slice(0, 1).toUpperCase() || "U"}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
