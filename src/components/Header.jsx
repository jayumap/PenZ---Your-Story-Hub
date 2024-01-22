import React from "react";
import { Link } from "react-router-dom";
import Logo from "../images/logo.png";
import { HiBars3 } from "react-icons/hi2";
import { IoCloseOutline } from "react-icons/io5";

function Header() {
  return (
    <nav>
      <div className="container navContainer">
        <Link to="/" className="navLogo">
          <img src={Logo} alt="Navbar Logo" />
        </Link>
        <ul className="navMenu">
          <li>
            <Link to={"/profile"}>Raj Sharma</Link>
          </li>
          <li>
            <Link to={"/create"}>Create Post</Link>
          </li>
          <li>
            <Link to={"/authors"}>Authors</Link>
          </li>
          <li>
            <Link to={"/logout"}>Logout</Link>
          </li>
        </ul>
        <button className="navToggleBtn">
          <IoCloseOutline />
        </button>
      </div>
    </nav>
  );
}

export default Header;
