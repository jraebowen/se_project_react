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
    </div>
  );
}
export default SideBar;
