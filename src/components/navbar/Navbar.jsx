import React, { useEffect, useState, useContext } from "react";
import "./navbar.scss";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { currentUser } = useContext(AuthContext);
  const number = 2; 

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="holdnav">
        <div className="left">
          <div className="logo">
            <Link to="/" className="link">
              <img src="/logo.jpg" alt="Logo" />
            </Link>
          </div>

          <ul className="ul-link">
            <li>
              <NavLink
                to="/"
                end
                className={({ isActive }) => (isActive ? "active-link" : "")}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/aboutus"
                className={({ isActive }) => (isActive ? "active-link" : "")}
              >
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/list"
                className={({ isActive }) => (isActive ? "active-link" : "")}
              >
                Shops
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/interest"
                className={({ isActive }) => (isActive ? "active-link" : "")}
              >
                Interest Form
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) => (isActive ? "active-link" : "")}
              >
                Contact Admin
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="right">
          {currentUser ? (
            <div className="user">
              <div>
              <img className="userAvater" src={currentUser.avatar || "/noavatar.jpg"} alt="User Avatar" />
              <span>{currentUser.username}</span>
              </div>
              <Link to="/profile" className="profile">
                <span>Profile</span>
                {number > 0 && <div className="notification">{number}</div>}
              </Link>
            </div>
          ) : (
            <div className="sign-links">
              <Link to="/login" className="auth_signin">Sign in</Link>
              <Link to="/register" className="register">
                Sign up
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
