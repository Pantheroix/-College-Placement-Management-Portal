import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      if (user.role === 'admin') {
        navigate('/admindas');
      } else if (user.role === 'hod') {
        navigate('/hoddas');
      } else if (user.role === 'student') {
        navigate('/studentdas');
      }
    }
  }, [navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement login logic here
    // For now, we'll just simulate a login and redirect
    if (email === 'admin@test.com') {
      localStorage.setItem('user', JSON.stringify({ email, role: 'admin' }));
      navigate('/admindas');
    } else if (email === 'hod@test.com') {
      localStorage.setItem('user', JSON.stringify({ email, role: 'hod' }));
      navigate('/hoddas');
    } else {
      localStorage.setItem('user', JSON.stringify({ email, role: 'student' }));
      navigate('/studentdas');
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">Login</div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="email"
                    className="form-control"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <input
                    type="password"
                    className="form-control"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
