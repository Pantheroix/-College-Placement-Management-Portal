import React, { useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    let role;
    if (email.endsWith('@admin.com')) {
      role = 'admin';
    } else if (email.endsWith('@hod.com')) {
      role = 'hod';
    } else {
      role = 'student';
    }
    login({ email, role });
    navigate('/');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="relative flex flex-col m-6 space-y-8 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0">
        {/* Left-side */}
        <div className="relative">
          <img
            src="https://picsum.photos/800/600"
            alt="img"
            className="w-[400px] h-full hidden rounded-r-2xl md:block object-cover"
          />
        </div>
        {/* Right-side */}
        <div className="flex flex-col justify-center p-8 md:p-14">
          <span className="mb-3 text-4xl font-bold">Welcome back</span>
          <span className="font-light text-gray-400 mb-8">
            Welcome back! Please enter your details
          </span>
          <form onSubmit={handleSubmit}>
            <div className="py-4">
              <span className="mb-2 text-md">Email</span>
              <input
                type="email"
                className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="py-4">
              <span className="mb-2 text-md">Password</span>
              <input
                type="password"
                name="pass"
                id="pass"
                className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-black text-white p-2 rounded-lg mb-6 hover:bg-white hover:text-black hover:border hover:border-gray-300"
            >
              Sign in
            </button>
          </form>
          <div className="text-center text-gray-400">
            Dont have an account?
            <Link to="/signup" className="font-bold text-black ml-2">Sign up for free</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
