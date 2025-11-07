import React from 'react';

const CreateDrive = () => {
  return (
    <div className="container mt-5">
      <h2>Create Placement Drive</h2>
      <form>
        <div className="form-group">
          <label>Company Name</label>
          <input type="text" className="form-control" />
        </div>
        <div className="form-group">
          <label>Job Title</label>
          <input type="text" className="form-control" />
        </div>
        <div className="form-group">
          <label>Job Description</label>
          <textarea className="form-control" rows="5"></textarea>
        </div>
        <div className="form-group">
          <label>Eligibility Criteria</label>
          <input type="text" className="form-control" />
        </div>
        <button type="submit" className="btn btn-primary">Create Drive</button>
      </form>
    </div>
  );
};

export default CreateDrive;
