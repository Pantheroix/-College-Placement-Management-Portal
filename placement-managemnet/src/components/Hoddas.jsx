import React from 'react';

const HODDashboard = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-4">
          <div className="card text-white bg-success mb-3">
            <div className="card-header">Placed Students</div>
            <div className="card-body">
              <h5 className="card-title">85</h5>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card text-white bg-danger mb-3">
            <div className="card-header">Unplaced Students</div>
            <div className="card-body">
              <h5 className="card-title">35</h5>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card text-white bg-info mb-3">
            <div className="card-header">Total Drives</div>
            <div className="card-body">
              <h5 className="card-title">25</h5>
            </div>
          </div>
        </div>
      </div>

      <div className="row mt-4">
        <div className="col-md-6">
          <h4>Placed Students</h4>
          <ul className="list-group">
            <li className="list-group-item">Student A - Company X</li>
            <li className="list-group-item">Student B - Company Y</li>
            <li className="list-group-item">Student C - Company Z</li>
          </ul>
        </div>
        <div className="col-md-6">
          <h4>Unplaced Students</h4>
          <ul className="list-group">
            <li className="list-group-item">Student D</li>
            <li className="list-group-item">Student E</li>
            <li className="list-group-item">Student F</li>
          </ul>
        </div>
      </div>

      <div className="mt-5">
        <h4>Announcements</h4>
        <div className="card">
          <div className="card-body">
            <p>Upcoming placement drive by Company G on 1st August 2024.</p>
            <form>
              <div className="form-group">
                <textarea className="form-control" rows="3"></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Post Announcement</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HODDashboard;
