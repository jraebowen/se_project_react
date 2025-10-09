import "./SideBar.css";
import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";

function SideBar({ onEditProfile }) {
  const { currentUser } = useContext(CurrentUserContext);

  return (
    <div className="sidebar">
      <div className="sidebar__profile-details">
        {currentUser.avatar ? (
          <img
            src={currentUser.avatar}
            alt={currentUser.name.slice(0, 1)}
            className="header__avatar"
          />
        ) : (
          <div className="sidebar__profile-avatar sidebar__profile-avatar-placeholder">
            {currentUser.name?.slice(0, 1).toUpperCase() || "U"}
          </div>
        )}
        <p className="sidebar__profile-name">{currentUser.name}</p>
      </div>
      <div className="sidebar__profile-buttons">
        <button
          type="button"
          className="sidebar__profile-button sidebar__profile-edit"
          onClick={onEditProfile}
        >
          Change Profile Data
        </button>
        <button
          type="button"
          className="sidebar__profile-button sidebar__profile-logout"
        >
          Log out
        </button>
      </div>
    </div>
  );
}
export default SideBar;
