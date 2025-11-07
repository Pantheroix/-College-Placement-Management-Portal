import React from 'react';

export default function StudentProfile() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-4">
          <div className="card">
            <div className="card-body text-center">
              <img src="https://via.placeholder.com/150" className="rounded-circle mb-3" alt="student" />
              <h3>John Doe</h3>
              <p className="text-muted">Computer Science</p>
            </div>
          </div>
        </div>
        <div className="col-md-8">
          <div className="card">
            <div className="card-header">
              <h4>Profile Details</h4>
            </div>
            <div className="card-body">
              <form>
                <div className="form-group">
                  <label>Full Name</label>
                  <input type="text" className="form-control" value="John Doe" readOnly />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input type="email" className="form-control" value="john.doe@example.com" readOnly />
                </div>
                <div className="form-group">
                  <label>Phone</label>
                  <input type="text" className="form-control" value="+1 234 567 890" readOnly />
                </div>
                <div className="form-group">
                  <label>Department</label>
                  <input type="text" className="form-control" value="Computer Science" readOnly />
                </div>
                <div className="form-group">
                  <label>Skills</label>
                  <input type="text" className="form-control" value="React, Node.js, MongoDB" readOnly />
                </div>
                <div className="form-group">
                  <label>Resume</label>
                  <p><a href="#">view_resume.pdf</a></p>
                  <input type="file" className="form-control-file" />
                </div>
                <button type="button" className="btn btn-primary">Edit Profile</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
