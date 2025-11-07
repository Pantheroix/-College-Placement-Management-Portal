import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
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
import ManageHODs from "./components/ManageHODs";
import CreateDrive from "./components/CreateDrive";
import { AuthProvider, AuthContext } from './context/AuthContext';
import { useContext } from "react";

const App = () => {
  const { user } = useContext(AuthContext);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={user ? <Home /> : <Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/studentdas" element={user && user.role === 'student' ? <Studentdas /> : <Navigate to="/login" />} />
        <Route path="/admindas" element={user && user.role === 'admin' ? <Admindas /> : <Navigate to="/login" />} />
        <Route path="/hoddas" element={user && user.role === 'hod' ? <Hoddas /> : <Navigate to="/login" />} />
        <Route path="/student-profile" element={<StudentProfile />} />
        <Route path="/placement-drives" element={<PlacementDrives />} />
        <Route path="/drive-details/:id" element={<DriveDetails />} />
        <Route path="/application-tracking" element={<ApplicationTracking />} />
        <Route path="/department-placements" element={<DepartmentPlacements />} />
        <Route path="/college-placements" element={<CollegePlacements />} />
        <Route path="/manage-students" element={<ManageStudents />} />
        <Route path="/manage-hods" element={<ManageHODs />} />
        <Route path="/create-drive" element={<CreateDrive />} />
      </Routes>
    </Router>
  );
}

const Root = () => (
  <AuthProvider>
    <App />
  </AuthProvider>
);

const Home = () => {
  const { user } = useContext(AuthContext);

  if (user.role === 'admin') {
    return <Navigate to="/admindas" />;
  } else if (user.role === 'hod') {
    return <Navigate to="/hoddas" />;
  } else {
    return <Navigate to="/studentdas" />;
  }
};

export default Root;
