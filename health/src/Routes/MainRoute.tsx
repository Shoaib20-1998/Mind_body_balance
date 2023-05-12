import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Login from "../Pages/login";
import Signup from "../Pages/signup";
import NotFound from "../Pages/NotFound";
import Profile from "../Pages/Profile";

const MainRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
};

export default MainRoute;
