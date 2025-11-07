import React from 'react';

const PlacementDrives = () => {
  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Placement Drives</h2>
        <div>
          <select className="form-control d-inline-block w-auto mr-2">
            <option>Filter by Department</option>
            <option>Computer Science</option>
            <option>Electronics</option>
            <option>Mechanical</option>
          </select>
          <select className="form-control d-inline-block w-auto mr-2">
            <option>Filter by Role</option>
            <option>Software Engineer</option>
            <option>Data Analyst</option>
            <option>Frontend Developer</option>
          </select>
          <select className="form-control d-inline-block w-auto">
            <option>Filter by Package</option>
            <option>5-10 LPA</option>
            <option>10-15 LPA</option>
            <option>15+ LPA</option>
          </select>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4 mb-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Company A</h5>
              <h6 className="card-subtitle mb-2 text-muted">Software Engineer</h6>
              <p className="card-text">Eligibility: CSE, ECE | 7 CGPA</p>
              <a href="#" className="btn btn-primary">Apply Now</a>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Company B</h5>
              <h6 className="card-subtitle mb-2 text-muted">Data Analyst</h6>
              <p className="card-text">Eligibility: All Branches | 6.5 CGPA</p>
              <a href="#" className="btn btn-primary">Apply Now</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlacementDrives;
