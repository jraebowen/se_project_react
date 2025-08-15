import "./Header.css";
import logo from "../../assets/logo.svg";
import avatar from "../../assets/avatar.webp";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";

function Header({
  weatherData,
  handleAddCard,
  toggleMobileMenu,
  isMobileMenuOpened,
  weatherToggleOn,
  handleWeatherToggle,
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
          <img className="header__logo" src={logo} alt="WTWR logo" />
          <p className="header__date-location">
            {currentDate}, {location}
          </p>
        </div>
        <div className="header__container_profile-details header__container_profile-details_desktop">
          <ToggleSwitch
            weatherToggleOn={weatherToggleOn}
            handleWeatherToggle={handleWeatherToggle}
          />
          <button
            type="button"
            className="header__button"
            onClick={handleAddCard}
          >
            + Add Clothes
          </button>
          <p className="header__name">Terrence Tegegne</p>
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
            <ToggleSwitch
              weatherToggleOn={weatherToggleOn}
              handleWeatherToggle={handleWeatherToggle}
            />
            <button
              type="button"
              className="profile-modal__close-button"
              onClick={toggleMobileMenu}
            />
            <button
              type="button"
              className="header__button"
              onClick={handleAddCard}
            >
              + Add Clothes
            </button>
            <div className="header__details-mobile">
              <p className="header__name">Terrence Tegegne</p>
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
