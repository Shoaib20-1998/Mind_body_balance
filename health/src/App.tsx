import React from "react";
import "./App.css";

import Navbar from "./Components/Navbar";
import MainRoute from "./Routes/MainRoute";
import Footer from "./Components/Footer";
function App() {
  return (
    <>
      <Navbar />
      <MainRoute />
      <Footer />
    </>
  );
}

export default App;
