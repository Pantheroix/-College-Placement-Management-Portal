import React from 'react';

const ManageStudents = () => {
  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Manage Students</h2>
        <button className="btn btn-primary">Add Student</button>
      </div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Student ID</th>
            <th>Name</th>
            <th>Department</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>101</td>
            <td>Student A</td>
            <td>Computer Science</td>
            <td>
              <button className="btn btn-sm btn-warning">Edit</button>
              <button className="btn btn-sm btn-danger ml-2">Delete</button>
            </td>
          </tr>
          <tr>
            <td>102</td>
            <td>Student B</td>
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

export default ManageStudents;
