import "./dashboardnavbar.scss";

const Navbar = () => {
  return (
    <div className="adminnavbar">
      <div className="logo">
        {/* <img src="/logo.svg" alt="Lamadmin Logo" /> */}
        <img src="/logo.jpg" alt="" />
        <span>adminDashboard</span>
      </div>
      <div className="icons">
        <img src="/search.svg" alt="Search" className="icon" />
        <img src="/app.svg" alt="Apps" className="icon" />
        <img src="/expand.svg" alt="Expand" className="icon" />
        <div className="notification">
          <img src="/notifications.svg" alt="Notifications" />
          <span>1</span>
        </div>
        <div className="user">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSllHYt7njYkqDfNdEBcNHiNkOwov2NXCnC6Q&s"
            alt="User avatar"
          />
          <span>Vincent</span>
        </div>
        <img src="/settings.svg" alt="Settings" className="icon" />
      </div>
    </div>
  );
};

export default Navbar;
