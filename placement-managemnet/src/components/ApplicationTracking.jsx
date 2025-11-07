import React from 'react';

const ApplicationTracking = () => {
  return (
    <div className="container mt-5">
      <h2>Application Tracking</h2>
      <div className="card mt-4">
        <div className="card-header d-flex justify-content-between">
          <h5>Company A - Software Engineer</h5>
          <span className="badge badge-success">Selected</span>
        </div>
        <div className="card-body">
          <table className="table">
            <thead>
              <tr>
                <th>Round</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Written Test</td>
                <td><span className="badge badge-success">Shortlisted</span></td>
              </tr>
              <tr>
                <td>Technical Interview 1</td>
                <td><span className="badge badge-success">Shortlisted</span></td>
              </tr>
              <tr>
                <td>HR Round</td>
                <td><span className="badge badge-success">Shortlisted</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="card mt-4">
        <div className="card-header d-flex justify-content-between">
          <h5>Company B - Data Analyst</h5>
          <span className="badge badge-danger">Rejected</span>
        </div>
        <div className="card-body">
          <table className="table">
            <thead>
              <tr>
                <th>Round</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Written Test</td>
                <td><span className="badge badge-success">Shortlisted</span></td>
              </tr>
              <tr>
                <td>Technical Interview 1</td>
                <td><span className="badge badge-danger">Rejected</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ApplicationTracking;
