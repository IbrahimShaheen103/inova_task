import { NavLink } from "react-router-dom";
import logo from "../assets/main-logo.svg";

const Header = () => {
  return (
    <div>
      <div className="logoContainer">
        <img src={logo} alt="logo" />
        <div className="avatarContainer">
          <img
            src="data:image/png;base64,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"
            alt="avatar"
            width={50}
          />
          <p>
            Hello <br />
            User
          </p>
        </div>
      </div>

      <div className="navbar">
        <NavLink to="/">Home</NavLink>
        <p>News</p>
        <p>courses</p>
        <NavLink to="list">E-books</NavLink>
        <p>Contact Us</p>
      </div>
    </div>
  );
};

export default Header;
