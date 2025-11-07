import React from "react";
import "./StudentDas.css";

export default function Studentdas() {
  return (
    <div className="container-fluid student-dashboard">
      <div className="row">
        <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-md-4">
          <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
            <h1 className="h2">Dashboard</h1>
          </div>

          <div className="row">
            <div className="col-md-6">
              <div className="card mb-4 shadow-sm">
                <div className="card-header">
                  <h4 className="my-0 font-weight-normal">Active Placement Drives</h4>
                </div>
                <div className="card-body">
                  <ul className="list-unstyled mt-3 mb-4">
                    <li>Company A - Software Engineer</li>
                    <li>Company B - Data Analyst</li>
                    <li>Company C - Frontend Developer</li>
                  </ul>
                  <button type="button" className="btn btn-lg btn-block btn-outline-primary">View all drives</button>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card mb-4 shadow-sm">
                <div className="card-header">
                  <h4 className="my-0 font-weight-normal">Applied Drives Status</h4>
                </div>
                <div className="card-body">
                  <ul className="list-unstyled mt-3 mb-4">
                    <li>Company A - Applied</li>
                    <li>Company B - Under Review</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6">
              <div className="card mb-4 shadow-sm">
                <div className="card-header">
                  <h4 className="my-0 font-weight-normal">Upcoming Rounds</h4>
                </div>
                <div className="card-body">
                  <ul className="list-unstyled mt-3 mb-4">
                    <li>Company A - Technical Interview - 24th July 2024</li>
                    <li>Company B - HR Round - 28th July 2024</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card mb-4 shadow-sm">
                <div className="card-header">
                  <h4 className="my-0 font-weight-normal">Notifications</h4>
                </div>
                <div className="card-body">
                  <ul className="list-unstyled mt-3 mb-4">
                    <li>Your application for Company A has been shortlisted.</li>
                    <li>New placement drive added: Company D.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
