import React, { useState, useContext, useEffect } from 'react';
import { AuthContext } from '../context/AuthContext';

export default function StudentProfile() {
  const { user } = useContext(AuthContext);
  const [resume, setResume] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: 'John Doe',
    email: user ? user.email : 'john.doe@example.com',
    phone: '+1 234 567 890',
    department: 'Computer Science',
    skills: 'React, Node.js, MongoDB',
  });
  const [resumeName, setResumeName] = useState(null);

  useEffect(() => {
    const storedResumeName = localStorage.getItem('userResumeName');
    if (storedResumeName) {
      setResumeName(storedResumeName);
    }
  }, []);

  const handleFileChange = (e) => {
    setResume(e.target.files[0]);
  };

  const handleUpload = () => {
    if (resume) {
      const reader = new FileReader();
      reader.onload = (event) => {
        localStorage.setItem('userResume', event.target.result);
        localStorage.setItem('userResumeName', resume.name);
        setResumeName(resume.name);
        alert('Resume uploaded successfully!');
        setResume(null); // Clear the file input
      };
      reader.readAsDataURL(resume);
    } else {
      alert('Please select a resume to upload.');
    }
  };

  const handleProfileChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-4">
          <div className="card">
            <div className="card-body text-center">
              <img src="https://via.placeholder.com/150" className="rounded-circle mb-3" alt="student" />
              <h3>{profile.name}</h3>
              <p className="text-muted">{profile.department}</p>
            </div>
          </div>
        </div>
        <div className="col-md-8">
          <div className="card">
            <div className="card-header">
              <h4>Profile Details</h4>
            </div>
            <div className="card-body">
              <div className="form-group">
                <label>Full Name</label>
                <input type="text" name="name" className="form-control" value={profile.name} onChange={handleProfileChange} readOnly={!isEditing} />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input type="email" name="email" className="form-control" value={profile.email} readOnly />
              </div>
              <div className="form-group">
                <label>Phone</label>
                <input type="text" name="phone" className="form-control" value={profile.phone} onChange={handleProfileChange} readOnly={!isEditing} />
              </div>
              <div className="form-group">
                <label>Department</label>
                <input type="text" name="department" className="form-control" value={profile.department} onChange={handleProfileChange} readOnly={!isEditing} />
              </div>
              <div className="form-group">
                <label>Skills</label>
                <input type="text" name="skills" className="form-control" value={profile.skills} onChange={handleProfileChange} readOnly={!isEditing} />
              </div>
              <button type="button" className="btn btn-primary" onClick={toggleEdit}>{isEditing ? 'Save Profile' : 'Edit Profile'}</button>

              <hr />

              <h5>Manage Resume</h5>
              <div className="form-group">
                <label>Resume</label>
                {resumeName && <p><a href={localStorage.getItem('userResume')} download={resumeName}>{resumeName}</a></p>}
                <input type="file" className="form-control-file" onChange={handleFileChange} />
              </div>
              <button type="button" className="btn btn-success" onClick={handleUpload} disabled={!resume}>Upload Resume</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
