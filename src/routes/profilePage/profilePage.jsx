import { useState, useEffect, useContext } from "react";
import List from "../../components/list/List";
import "./profilePage.scss";
import apiRequest from "../../lib/apiRequest";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

function ProfilePage() {

  const {updateUser, currentUser} = useContext(AuthContext)

  const navigate = useNavigate();


  

  const [savedItems, setSavedItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  const handleLogout = async () => {
    try {
      await apiRequest.post("/auth/logout");
      updateUser(null)
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const fetchSaved = async () => {
      try {
        const res = await apiRequest.get("/saved");
        setSavedItems(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchSaved();
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = savedItems.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(savedItems.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="profilePage">
      <div className="details">
        <div className="wrapper">
          <div className="title">
            <h1>Profile Information</h1>
            <Link to="/profile/update">
            <button className="updateBtn">Update Profile</button>
            </Link>
          </div>
          <div className="info">
            <span className="avatar">
              Avatar:{" "}
              <img
                src={currentUser.avatar || "noavatar.jpg"}
                alt="User Avatar"
              />
            </span>
            <span>
              Username: <b>{currentUser.username}</b>
            </span>
            <span>
              E-mail: <b>{currentUser.email}</b>
            </span>
            <span>
              Phone: <b>070229481275</b>
            </span>
            <button className="logoutBtn" onClick={handleLogout}>
              Logout
            </button>
          </div>
        </div>
      </div>

      <div className="savedList">
        <div className="title">
          <h1>Saved Favourites</h1>
        </div>
        {savedItems.length === 0 ? (
          <p>No saved favourites yet.</p>
        ) : (
          <>
            <div className="Flist">
              <List items={currentItems} />
            </div>

            <nav className="mt-4">
              <ul className="pagination">
                {[...Array(totalPages)].map((_, i) => (
                  <li
                    key={i}
                    className={`page-item ${
                      currentPage === i + 1 ? "active" : ""
                    }`}
                  >
                    <button
                      className="page-link"
                      onClick={() => handlePageChange(i + 1)}
                    >
                      {i + 1}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </>
        )}
      </div>
    </div>
  );
}

export default ProfilePage;
