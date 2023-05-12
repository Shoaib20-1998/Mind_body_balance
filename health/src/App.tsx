import "./App.css";
import Navbar from "./Components/Navbar";
import Login from "./Pages/login";
import Signup from "./Pages/signup";
import MainRoute from "./Routes/MainRoute";

function App() {
  return (
    <>
      <Navbar />
      <MainRoute />
    </>
  );
}

export default App;
