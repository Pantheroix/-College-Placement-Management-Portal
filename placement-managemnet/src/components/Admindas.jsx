import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
  const [data, setData] = useState(null);
  const [insight, setInsight] = useState('');

  useEffect(() => {
    // Fetch data from a mock API
    const fetchData = async () => {
      const mockData = {
        totalStudents: 1250,
        totalPlaced: 980,
        totalDrives: 80,
        departments: 6,
        recentDrives: [
          { id: 1, company: 'Tech Solutions', title: 'Software Engineer' },
          { id: 2, company: 'Data Insights', title: 'Data Analyst' },
          { id: 3, company: 'Creative Minds', title: 'Frontend Developer' },
        ],
      };
      setData(mockData);
    };

    fetchData();
  }, []);

  const generateInsight = () => {
    // In a real application, you would make an API call to a Gemini AI model.
    // For this example, we'll just use a sample insight.
    setInsight('Based on the current data, the placement rate for Computer Science students is 15% higher than the average. Consider organizing more drives for other departments.');
  };

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-3">
          <div className="card text-white bg-primary mb-3">
            <div className="card-header">Total Students</div>
            <div className="card-body">
              <h5 className="card-title">{data.totalStudents}</h5>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card text-white bg-success mb-3">
            <div className="card-header">Total Placed</div>
            <div className="card-body">
              <h5 className="card-title">{data.totalPlaced}</h5>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card text-white bg-warning mb-3">
            <div className="card-header">Total Drives</div>
            <div className="card-body">
              <h5 className="card-title">{data.totalDrives}</h5>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card text-white bg-info mb-3">
            <div className="card-header">Departments</div>
            <div className="card-body">
              <h5 className="card-title">{data.departments}</h5>
            </div>
          </div>
        </div>
      </div>

      <div className="row mt-4">
        <div className="col-md-8">
          <h4>Recent Drives</h4>
          <ul className="list-group">
            {data.recentDrives.map((drive) => (
              <li key={drive.id} className="list-group-item">
                {drive.company} - {drive.title}
              </li>
            ))}
          </ul>
        </div>
        <div className="col-md-4">
          <h4>Manage Accounts</h4>
          <Link to="/manage-students" className="btn btn-primary btn-block">Manage Students</Link>
          <Link to="/manage-hods" className="btn btn-secondary btn-block mt-2">Manage HODs</Link>
          <Link to="/post-announcement" className="btn btn-info btn-block mt-2">Post Announcement</Link>
		  <Link to="/create-drive" className="btn btn-success btn-block mt-2">Create Drive</Link>
        </div>
      </div>

      <div className="row mt-5">
        <div className="col-md-12">
          <h4>AI Analytics</h4>
          <div className="card">
            <div className="card-body">
              <p>Click the button to generate AI-powered insights into your placement data.</p>
              <button className="btn btn-primary" onClick={generateInsight}>Generate Insights</button>
              {insight && <p className="mt-3"><strong>Insight:</strong> {insight}</p>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
