import "./Header.css";
import logo from "../../assets/logo.svg";
import avatar from "../../assets/avatar.webp";

function Header() {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  return (
    <header className="header">
      <div className="header__container">
        <div className="header__container_logo-date">
          <img className="header__logo" src={logo} alt="WTWR logo"></img>
          <p className="header__date-location"></p>
        </div>
        <div className="header__container_profile-details">
          <button className="header__button">+ Add Clothes</button>
          <p className="header__name">Terrence Tegegne</p>
          <img src={avatar} alt="profile picture" className="header__avatar" />
        </div>
      </div>
    </header>
  );
}

export default Header;
