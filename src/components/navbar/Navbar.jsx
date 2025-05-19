import { useState } from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);

  const user = true;
  return (
    <nav>
      <div className="left">
        <a href="" className="logo">
          <img src="/logo.jpg" alt="" />
        </a>
        <a className="first" href="/">
          Home
        </a>
        <a href="/list">About</a>
        <a href="/:id">Contact</a>
        <a href="/profile">Agents</a>
      </div>
      <div className="right">
        {user ? (
          <div className="user">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC3SDs_X1Hu7wtIHG-f_F6fq932zHgCsGbNw&s" alt="" />
            <span>Chukwuma Eze</span>
            <Link  className="profile" to="/profile">
            <div className="notification">3</div>
            <span>Profile</span>
            </Link>
          </div>
        ) : (
          <>
            {" "}
            <a href="/">Sign in</a>
            <a href="/" className="register">
              Sign up
            </a>
          </>
        )}
        <div className="menuIcon">
          <img
            src="/menu.png"
            alt=""
            onClick={() => setOpen((prev) => !prev)}
          />
        </div>
        <div className={open ? "menu active" : "menu"}>
          <a href="/">Home</a>
          <a href="/list">About</a>
          <a href="/:id">Contact</a>
          <a href="/profile">Agents</a>
          <a href="/">Sign in</a>
          <a href="/">Sign up</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
