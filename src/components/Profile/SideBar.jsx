import "./SideBar.css";
import avatar from "../../assets/avatar.webp";

function SideBar() {
  return (
    <div className="sidebar">
      <div className="sidebar__profile-details">
        <img
          src={avatar}
          alt="profile picture"
          className="sidebar__profile-avatar"
        />
        <p className="sidebar__profile-name">Terrence Tegegne</p>
      </div>
      <div className="sidebar__profile-buttons">
        <button
          type="button"
          className="sidebar__profile-button sidebar__profile-edit"
        >
          Change Profile Data
        </button>
        <button
          type="button"
          className="sidebar__profile-button sidebar__profile-logout"
        >
          Logout
        </button>
      </div>
    </div>
  );
}
export default SideBar;
