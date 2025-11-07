import React from 'react';

const ManageHODs = () => {
  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Manage HODs</h2>
        <button className="btn btn-primary">Add HOD</button>
      </div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>HOD ID</th>
            <th>Name</th>
            <th>Department</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>201</td>
            <td>HOD A</td>
            <td>Computer Science</td>
            <td>
              <button className="btn btn-sm btn-warning">Edit</button>
              <button className="btn btn-sm btn-danger ml-2">Delete</button>
            </td>
          </tr>
          <tr>
            <td>202</td>
            <td>HOD B</td>
            <td>Electronics</td>
            <td>
              <button className="btn btn-sm btn-warning">Edit</button>
              <button className="btn btn-sm btn-danger ml-2">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ManageHODs;
