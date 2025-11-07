import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = (props) => {
  let navigate = useNavigate();
  const [Credentials, SetCredentials] = useState({
    role: "",
    email: "",
    password: "",
  });
  const HandleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/auth/CreateUser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        Role: Credentials.role,
        Email: Credentials.email,
        Passwd: Credentials.password,
      }),
    });
    const result = await response.json();
    console.log(result);

    if (result.success) {
      localStorage.setItem("token", result.authToken);
      navigate("/login");
      props.showAlert("Account Created Successfully", "success");
    } else if (result.error) {
      props.showAlert("Email already registered.", "info");
    } else {
      props.showAlert("Error Occured", "danger");
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
        <h3 className="my-3 align-self-center ">Hello NewUser!</h3>
        <form onSubmit={HandleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              <b>Role</b>
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
          <button
            type="submit"
            className="btn btn-primary my-2"
            onSubmit={HandleSubmit}
          >
            Signup
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
