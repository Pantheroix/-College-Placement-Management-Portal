import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../../services/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

const Signup = (props) => {
  let navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    role: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        credentials.email,
        credentials.password
      );
      const user = userCredential.user;

      // Add user role to Firestore
      await setDoc(doc(db, "users", user.uid), {
        email: credentials.email,
        role: credentials.role.toLowerCase(),
      });

      navigate("/login");
      console.log("Account Created Successfully");
    } catch (error) {
      console.error("Error creating account:", error);
      if (error.code === 'auth/email-already-in-use') {
        console.log("Email already registered.")
      } else {
        console.log("Error Occured")
      }
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
        <h3 className="my-3 align-self-center ">Hello New User!</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              <b>Role (student, hod, or admin)</b>
            </label>
            <input
              type="text"
              name="role"
              className="form-control"
              id="name"
              onChange={handleChange}
              minLength={2}
              required
            />
          </div>
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
            Signup
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
