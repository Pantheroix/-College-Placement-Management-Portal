import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../../services/firebase"; // Import Firebase services
import { signInWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";

const Login = (props) => {
  let navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        credentials.email,
        credentials.password
      );
      const user = userCredential.user;

      // Get user role from Firestore
      const userDoc = await getDoc(doc(db, "users", user.uid));
      if (userDoc.exists()) {
        const userData = userDoc.data();
        const role = userData.role;

        // Redirect based on role
        if (role === "student") {
          navigate("/student/dashboard");
        } else if (role === "admin") {
          navigate("/admin/dashboard");
        } else if (role === "hod") {
          navigate("/hod/dashboard");
        } else {
          navigate("/");
        }
        // props.showAlert("Login Successful", "success");
      } else {
        // props.showAlert("User role not found", "danger");
      }
    } catch (error) {
      console.error("Error logging in:", error);
      // props.showAlert("Invalid Credentials", "danger");
    }
  };

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <div
        className="container border rounded d-flex flex-column "
        style={{ maxWidth: "500px", backgroundColor: "rgb(141, 235, 213)" }}
      >
        <h3 className="my-3 align-self-center ">Welcome Back!</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              <b>Email address</b>
            </label>
            <input
              type="email"
              name="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              onChange={handleChange}
              required
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              <b>Password</b>
            </label>
            <input
              type="password"
              name="password"
              className="form-control"
              id="exampleInputPassword1"
              onChange={handleChange}
              minLength={5}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary my-2">
            login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
