import React from 'react';

const CollegePlacements = () => {
  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>College-wise Placements</h2>
        <button className="btn btn-primary">Download Report</button>
      </div>

      <div className="row">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">Placement Summary</div>
            <div className="card-body">
              <p>Total Students: 1200</p>
              <p>Placed Students: 950</p>
              <p>Placement Percentage: 79.1%</p>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">Highest Package</div>
            <div className="card-body">
              <p>24 LPA - Company X</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-5">
        <h4>Department-wise Performance</h4>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Department</th>
              <th>Total Students</th>
              <th>Placed</th>
              <th>Placement %</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Computer Science</td>
              <td>300</td>
              <td>280</td>
              <td>93.3%</td>
            </tr>
            <tr>
              <td>Electronics</td>
              <td>250</td>
              <td>220</td>
              <td>88%</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CollegePlacements;
