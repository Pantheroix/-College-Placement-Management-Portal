import React, { useState } from 'react';

const CreateDrive = () => {
  const [companyName, setCompanyName] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [jobDescription, setJobDescription] = useState('');
  const [eligibilityCriteria, setEligibilityCriteria] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would make an API call to create the drive.
    console.log({
      companyName,
      jobTitle,
      jobDescription,
      eligibilityCriteria,
    });
    alert('Drive created successfully!');
  };

  return (
    <div className="container mt-5">
      <h2>Create Placement Drive</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Company Name</label>
          <input
            type="text"
            className="form-control"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Job Title</label>
          <input
            type="text"
            className="form-control"
            value={jobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Job Description</label>
          <textarea
            className="form-control"
            rows="5"
            value={jobDescription}
            onChange={(e) => setJobDescription(e.target.value)}
            required
          ></textarea>
        </div>
        <div className="form-group">
          <label>Eligibility Criteria</label>
          <input
            type="text"
            className="form-control"
            value={eligibilityCriteria}
            onChange={(e) => setEligibilityCriteria(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Create Drive</button>
      </form>
    </div>
  );
};

export default CreateDrive;
