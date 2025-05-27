import { useState, useEffect } from "react";
import List from "../../components/list/List";
import "./profilePage.scss";
import Chat from "../../components/chat/Chat";
import apiRequest from "../../lib/apiRequest";
import { useNavigate } from "react-router-dom";

function ProfilePage() {

  const navigate = useNavigate()
  const handleLogout = async ()=> {
    try{
      const res  = apiRequest.post("/auth/logout");
      localStorage.removeItem("user")

      navigate("/")
    } catch(err) {
      console.log(err)
    }
  }

  useEffect(() => {
    const container = document.querySelector(".details");
    let timeout;
  
    const handleScroll = () => {
      container.classList.add("scrolling");
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        container.classList.remove("scrolling");
      }, 1000); 
    };
  
    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);
  

  return (
    <div className="profilePage">
      <div className="details">
        <div className="wrapper">
          <div className="title">
            <h1>User Information</h1>
            <button>Update Profile</button>
          </div>
          <div className="info">
            <span>
              Avater:{" "}
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC3SDs_X1Hu7wtIHG-f_F6fq932zHgCsGbNw&s"
                alt=""
              />
            </span>
            <span>Username: <b>Chukwuma Eze</b></span>
            <span>E-mail: <b>chukwuma@gmail.com</b></span>
            <button onClick={handleLogout}>Login</button>
          </div>
          <div className="title">
            <h1>List</h1>
            <button>Create New Post</button>
          </div>
          <List />
          <div className="title">
            <h1>Saved List</h1>
          </div>
          <List />
        </div>
      </div>
      <div className="chatContainer">
        <div className="wrapper">
          <Chat />
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
