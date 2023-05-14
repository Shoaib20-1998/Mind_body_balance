import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Login from "../Pages/login";
import Signup from "../Pages/signup";
import NotFound from "../Pages/NotFound";
import Profile from "../Pages/Profile";
import Video from "../Pages/Video";
import WorkoutMain from "../Pages/workout/WorkoutMain";
import ExercisesDetail from "../Pages/excercises/ExercisesDetail";
import Exercisemain from "../Pages/excercises/Exercisemain";
const MainRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/workout"  element={<WorkoutMain/>}/>
      <Route path="/video" element={<Video/>}/>
      <Route path="/exercise/:id" element={<ExercisesDetail />} />
      <Route path="/exercise" element={<Exercisemain/>}/>
    </Routes>
  );
};

export default MainRoute;
