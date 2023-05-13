import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Login from "../Pages/login";
import Signup from "../Pages/signup";
import NotFound from "../Pages/NotFound";
import Profile from "../Pages/Profile";
import WorkoutMain from "../Pages/workout/WorkoutMain";

const MainRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/workout" element={<WorkoutMain />} />
    </Routes>
  );
};

export default MainRoute;
