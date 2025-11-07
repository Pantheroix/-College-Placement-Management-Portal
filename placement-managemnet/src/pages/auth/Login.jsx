import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import NoteContext from "../context/notes/NoteContext";

const Login = (props) => {
  let navigate = useNavigate();
  const [Credentials, SetCredentials] = useState({
    email: "",
    password: "",
  });

  const HandleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/auth/LogUser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        Email: Credentials.email,
        Passwd: Credentials.password,
      }),
    });
    const result = await response.json();
    console.log(result);
    if (result.success) {
      localStorage.setItem("Role", result.Role);
      localStorage.setItem("token", result.authToken);

      let Role = localStorage.getItem("Role", result.Role);
      if (Role === "Student") {
        navigate("/Studentdas");
      } else if (Role === "Admin") {
        navigate("/Admindas");
      } else if (Role === "HOD") {
        navigate("/Hoddas");
      } else {
        navigate("/");
      }
      props.showAlert("Login Successfull", "success");
    } else {
      props.showAlert("Invalide Credentials", "danger");
    }
  };
  const handleChange = (e) => {
    SetCredentials({ ...Credentials, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <div
        className="container border rounded d-flex flex-column "
        style={{ maxWidth: "500px", backgroundColor: "rgb(141, 235, 213)" }}
      >
        <h3 className="my-3 align-self-center ">Welcome Back!</h3>
        <form onSubmit={HandleSubmit}>
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
            <a
              className="d-flex justify-content-end text-decoration-none text-dark "
              href="/"
            >
              Forgot your password?
            </a>
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
