// // PrivateRoute.jsx
// import React from "react";
// import { Navigate } from "react-router-dom";

// const PrivateRoute = ({ children }) => {
//   const user = JSON.parse(localStorage.getItem("loggedInUser"));

//   if (!user) {
//     // Not logged in, redirect to login
//     return <Navigate to="/login" replace />;
//   }

//   return children;
// };

// export default PrivateRoute;
// PrivateRoute.jsx
import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const user = JSON.parse(localStorage.getItem("loggedInUser"));

  if (!user) {
    // Not logged in, redirect to login
    return <Navigate to="/login" replace />;
  }

  // ✅ Render nested child routes
  return <Outlet />;
};

export default PrivateRoute;
