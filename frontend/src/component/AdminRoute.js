import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
// import { isAuthenticated } from "../helper/auth";
// import { useNavigate } from 'react-router-dom'

// const AdminRoute = ({ children }) => {
//     // const navigate = useNavigate();
//     const { userInfo } = useSelector((state) => state.signIn);
//     return userInfo && userInfo.role === 1 ? children : <Navigate to="/"/>;
//     // return userInfo && userInfo.role === 1 ? children :navigate('/');
// }

const AdminRoute = ({ children }) => {
  const { userInfo } = useSelector((state) => state.signIn);
  return userInfo &&  userInfo.user.role === 1 ? children : <Navigate to="/" replace />;
//   return isAuthenticated()?.role === 1 ? children : <Navigate to="/" replace />;

//   if (userInfo.user.role === 1) {
//     navigate("/admin/dashboard");
//   } else {
//     navigate("/");
//   }
};

export default AdminRoute;
