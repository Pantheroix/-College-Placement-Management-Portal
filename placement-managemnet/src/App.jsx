import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Studentdas from "./components/Studentdas";
import Hoddas from "./components/Hoddas";
import Admindas from "./components/Admindas";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Studentdas" element={<Studentdas />} />
          <Route path="/Admindas" element={<Admindas />} />
          <Route path="/Hoddas" element={<Hoddas />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
