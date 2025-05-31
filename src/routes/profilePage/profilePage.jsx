import { useState, useEffect } from "react";
import List from "../../components/list/List";
import "./profilePage.scss";
import apiRequest from "../../lib/apiRequest";
import { useNavigate } from "react-router-dom";

function ProfilePage() {
  const navigate = useNavigate();
  const [savedItems, setSavedItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  const handleLogout = async () => {
    try {
      await apiRequest.post("/auth/logout");
      localStorage.removeItem("user");
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

  // Pagination calculations based on savedItems
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
            <button className="updateBtn">Update Profile</button>
          </div>
          <div className="info">
            <span className="avatar">
              Avatar:{" "}
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC3SDs_X1Hu7wtIHG-f_F6fq932zHgCsGbNw&s"
                alt="User Avatar"
              />
            </span>
            <span>
              Username: <b>Chukwuma Eze</b>
            </span>
            <span>
              E-mail: <b>chukwuma@gmail.com</b>
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
