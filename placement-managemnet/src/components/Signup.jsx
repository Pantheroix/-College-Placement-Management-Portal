import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

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
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="relative flex flex-col m-6 space-y-8 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0">
        {/* Left-side */}
        <div className="relative">
          <img
            src="https://picsum.photos/800/600?random=2"
            alt="img"
            className="w-[400px] h-full hidden rounded-r-2xl md:block object-cover"
          />
        </div>
        {/* Right-side */}
        <div className="flex flex-col justify-center p-8 md:p-14">
          <span className="mb-3 text-4xl font-bold">Create an Account</span>
          <span className="font-light text-gray-400 mb-8">
            Please enter your details to create an account
          </span>
          <form onSubmit={HandleSubmit}>
            <div className="py-4">
              <span className="mb-2 text-md">Role</span>
              <input
                type="text"
                name="role"
                className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
                onChange={handleChange}
                required
              />
            </div>
            <div className="py-4">
              <span className="mb-2 text-md">Email</span>
              <input
                type="email"
                name="email"
                className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
                onChange={handleChange}
                required
              />
            </div>
            <div className="py-4">
              <span className="mb-2 text-md">Password</span>
              <input
                type="password"
                name="password"
                className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
                onChange={handleChange}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-black text-white p-2 rounded-lg mb-6 hover:bg-white hover:text-black hover:border hover:border-gray-300"
            >
              Sign up
            </button>
          </form>
          <div className="text-center text-gray-400">
            Already have an account?
            <Link to="/login" className="font-bold text-black ml-2">Sign in</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
