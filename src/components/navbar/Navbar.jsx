import React, { useEffect, useState } from "react";
import "./navbar.scss";
// import { assets } from "../assets/assets";
// import { LuLockKeyhole } from "react-icons/lu";
// import { GoArrowUpRight } from "react-icons/go";
import { Link } from "react-router-dom";
import { GiSydneyOperaHouse } from "react-icons/gi";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

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
              <GiSydneyOperaHouse /> CheckBest
            </Link>
          </div>

          <div className="ul-link">
            <li>
              <a href="">Buy</a>
            </li>
            <li>
              <a href="">Rent</a>
            </li>
            <li>
              <a href="">New Project</a>
            </li>
            <li>
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
            </li>
            <li>
              <a href="/interest">Interest Form</a>
            </li>
            <li>
              <a href="">Blogs</a>
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
