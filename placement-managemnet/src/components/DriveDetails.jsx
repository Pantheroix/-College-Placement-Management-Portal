import React from 'react';

const DriveDetails = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-8">
          <div className="card">
            <div className="card-header">
              <h2>Company A - Software Engineer</h2>
            </div>
            <div className="card-body">
              <h4>Job Description</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...</p>
              <h4>Eligibility</h4>
              <p>CSE, ECE | 7 CGPA</p>
              <h4>Rounds</h4>
              <ul>
                <li>Technical Round 1</li>
                <li>Technical Round 2</li>
                <li>HR Round</li>
              </ul>
              <button className="btn btn-primary">Apply Now</button>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-header">
              <h4>Application Status</h4>
            </div>
            <div className="card-body">
              <ul className="timeline">
                <li>
                  <p><strong>Applied</strong></p>
                  <p>20th July 2024</p>
                </li>
                <li>
                  <p><strong>Written Test</strong></p>
                  <p>Pending</p>
                </li>
                <li>
                  <p><strong>Interview</strong></p>
                  <p>Pending</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DriveDetails;
