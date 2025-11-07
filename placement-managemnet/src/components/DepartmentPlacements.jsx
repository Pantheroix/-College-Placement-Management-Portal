import React from 'react';

const DepartmentPlacements = () => {
  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Department-wise Placements</h2>
        <select className="form-control w-auto">
          <option>Filter by Department</option>
          <option>Computer Science</option>
          <option>Electronics</option>
          <option>Mechanical</option>
        </select>
      </div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Student Name</th>
            <th>Company</th>
            <th>Package (LPA)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Student A</td>
            <td>Company X</td>
            <td>12</td>
          </tr>
          <tr>
            <td>Student B</td>
            <td>Company Y</td>
            <td>10</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default DepartmentPlacements;
