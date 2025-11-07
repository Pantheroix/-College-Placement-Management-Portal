import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Studentdas from "./components/Studentdas";
import Hoddas from "./components/Hoddas";
import Admindas from "./components/Admindas";
import StudentProfile from "./components/StudentProfile";
import PlacementDrives from "./components/PlacementDrives";
import DriveDetails from "./components/DriveDetails";
import ApplicationTracking from "./components/ApplicationTracking";
import DepartmentPlacements from "./components/DepartmentPlacements";
import CollegePlacements from "./components/CollegePlacements";
import ManageStudents from "./components/ManageStudents";
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
          <Route path="/student-profile" element={<StudentProfile />} />
          <Route path="/placement-drives" element={<PlacementDrives />} />
          <Route path="/drive-details/:id" element={<DriveDetails />} />
          <Route path="/application-tracking" element={<ApplicationTracking />} />
          <Route path="/department-placements" element={<DepartmentPlacements />} />
          <Route path="/college-placements" element={<CollegePlacements />} />
          <Route path="/manage-students" element={<ManageStudents />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
