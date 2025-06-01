// import React, { useContext, useEffect } from "react";
// import "./layout.scss";
// import Navbar from "../../components/navbar/Navbar";
// import { Navigate, Outlet } from "react-router-dom";
// import { AuthContext } from "../../context/AuthContext";

// const layout = () => {
//   return (
//     <div className="layout">
//       <div className="navbar">
//         <Navbar />
//       </div>
//       <div className="content">
//         <Outlet />
//       </div>
//     </div>
//   );
// };

// const RequireAuth = () => {
//   const { currentUser } = useContext(AuthContext);

//   // if(!user) {
//   //   return <Navigate to="/login" />
//   // }

//   // useEffect(()=> {
//   //   if(!currentUser) {

//   //   }
//   // }, [currentUser])
//   return !currentUser ? (
//     <Navigate to="/login" />
//   ) : (
//     <div className="layout">
//       <div className="navbar">
//         <Navbar />
//       </div>
//       <div className="content">
//         <Outlet />
//       </div>
//     </div>
//   );
// };

// export default { layout, RequireAuth };

import React, { useContext } from "react";
import "./layout.scss";
import Navbar from "../../components/navbar/Navbar";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

export function Layout() {
  return (
    <div className="layout">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
}

export function RequireAuth() {
  const { currentUser } = useContext(AuthContext);

  return !currentUser ? (
    <Navigate to="/login" />
  ) : (
    <Layout />
  );
}

