import React from 'react';

const AdminDashboard = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-3">
          <div className="card text-white bg-primary mb-3">
            <div className="card-header">Total Students</div>
            <div className="card-body">
              <h5 className="card-title">1200</h5>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card text-white bg-success mb-3">
            <div className="card-header">Total Placed</div>
            <div className="card-body">
              <h5 className="card-title">950</h5>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card text-white bg-warning mb-3">
            <div className="card-header">Total Drives</div>
            <div className="card-body">
              <h5 className="card-title">75</h5>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card text-white bg-info mb-3">
            <div className="card-header">Departments</div>
            <div className="card-body">
              <h5 className="card-title">5</h5>
            </div>
          </div>
        </div>
      </div>

      <div className="row mt-4">
        <div className="col-md-8">
          <h4>Recent Drives</h4>
          <ul className="list-group">
            <li className="list-group-item">Company A - Software Engineer</li>
            <li className="list-group-item">Company B - Data Analyst</li>
            <li className="list-group-item">Company C - Frontend Developer</li>
          </ul>
        </div>
        <div className="col-md-4">
          <h4>Manage Accounts</h4>
          <button className="btn btn-primary btn-block">Manage Students</button>
          <button className="btn btn-secondary btn-block mt-2">Manage HODs</button>
          <button className="btn btn-info btn-block mt-2">Post Announcement</button>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
