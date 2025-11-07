import "./assets/styles/App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/common/Navbar";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import StudentDashboard from "./pages/student/StudentDashboard";
import HODDashboard from "./pages/hod/HODDashboard";
import AdminDashboard from "./pages/admin/AdminDashboard";
import StudentProfile from "./components/student/StudentProfile";
import PlacementDrives from "./components/common/PlacementDrives";
import DriveDetails from "./components/common/DriveDetails";
import ApplicationTracking from "./components/student/ApplicationTracking";
import DepartmentPlacements from "./components/hod/DepartmentPlacements";
import CollegePlacements from "./components/admin/CollegePlacements";
import ManageStudents from "./components/admin/ManageStudents";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          {/* Student Routes */}
          <Route path="/student/dashboard" element={<StudentDashboard />} />
          <Route path="/student/profile" element={<StudentProfile />} />
          <Route path="/student/application-tracking" element={<ApplicationTracking />} />


          {/* HOD Routes */}
          <Route path="/hod/dashboard" element={<HODDashboard />} />
          <Route path="/hod/placements" element={<DepartmentPlacements />} />

          {/* Admin Routes */}
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/placements" element={<CollegePlacements />} />
          <Route path="/admin/manage-students" element={<ManageStudents />} />


          {/* Common Routes */}
          <Route path="/placement-drives" element={<PlacementDrives />} />
          <Route path="/drive-details/:id" element={<DriveDetails />} />

        </Routes>
      </Router>
    </>
  );
}

export default App;
