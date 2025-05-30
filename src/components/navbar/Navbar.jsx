import React, { useEffect, useState } from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";
import { GiSydneyOperaHouse } from "react-icons/gi";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

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
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/aboutus">About Us</a>
            </li>
            <li>
              <a href="/list">Shops</a>
            </li>
            {/* <li>
              <a href="">Shortlet</a>
            </li>
            <li>
              <a href="">Services</a>
            </li>
            <li>
              <a href="">Agent</a>
            </li>
            <li>
              <a href="">Area Guide</a>
            </li> */}
            <li>
              <a href="/interest">Interest Form</a>
            </li>
            <li>
              <a href="">Contact Admin</a>
            </li>

            {/* <hr /> */}
          </div>
        </div>
        <div className="nav_btn">
          <Link to="">
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
