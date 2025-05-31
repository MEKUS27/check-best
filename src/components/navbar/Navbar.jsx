import React, { useEffect, useState } from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";
import { GiSydneyOperaHouse } from "react-icons/gi";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { NavLink } from "react-router-dom";


function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  // const user = true;
  return (
    <div>
    <div className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="holdnav">
        <div className="left">
          <div className="logo">
            <Link to="/" className="link">
              {" "}
              {/* <GiSydneyOperaHouse /> CheckBest */}
              <img src="/logo.jpg" alt="" />
            </Link>
          </div>

          <div className="ul-link">
  <li>
    <NavLink to="/" end className={({ isActive }) => isActive ? "active-link" : ""}>Home</NavLink>
  </li>
  <li>
    <NavLink to="/aboutus" className={({ isActive }) => isActive ? "active-link" : ""}>About Us</NavLink>
  </li>
  <li>
    <NavLink to="/list" className={({ isActive }) => isActive ? "active-link" : ""}>Shops</NavLink>
  </li>
  <li>
    <NavLink to="/interest" className={({ isActive }) => isActive ? "active-link" : ""}>Interest Form</NavLink>
  </li>
  <li>
    <NavLink to="/contact" className={({ isActive }) => isActive ? "active-link" : ""}>Contact Admin</NavLink>
  </li>
</div>

        </div>
        <div className="nav_btn">
          <Link to="/profile">
            <button className="btn_one">My Profile</button>
          </Link>
          <Link to="/login">
            <button className="btn_two">Log in</button>
          </Link>
          {/* <a href=""><button className='btn_two'>Add Listing <GoArrowUpRight /></button></a> */}
        </div>
      </div>
    
    </div>
  </div>
  );
}

export default Navbar;
