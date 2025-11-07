import React, { useState, useEffect } from 'react';

const HODDashboard = () => {
  const [data, setData] = useState(null);
  const [insight, setInsight] = useState('');

  useEffect(() => {
    // Fetch data from a mock API
    const fetchData = async () => {
      const mockData = {
        placedStudents: 90,
        unplacedStudents: 40,
        totalDrives: 30,
        placedStudentsList: [
          { id: 1, name: 'Student A', company: 'Company X' },
          { id: 2, name: 'Student B', company: 'Company Y' },
          { id: 3, name: 'Student C', company: 'Company Z' },
        ],
        unplacedStudentsList: [
          { id: 4, name: 'Student D' },
          { id: 5, name: 'Student E' },
          { id: 6, name: 'Student F' },
        ],
      };
      setData(mockData);
    };

    fetchData();
  }, []);

  const generateInsight = () => {
    // In a real application, you would make an API call to a Gemini AI model.
    // For this example, we'll just use a sample insight.
    setInsight('The top-performing students in your department are excelling in interviews with tech companies. Consider offering more mock interviews to other students.');
  };

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-4">
          <div className="card text-white bg-success mb-3">
            <div className="card-header">Placed Students</div>
            <div className="card-body">
              <h5 className="card-title">{data.placedStudents}</h5>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card text-white bg-danger mb-3">
            <div className="card-header">Unplaced Students</div>
            <div className="card-body">
              <h5 className="card-title">{data.unplacedStudents}</h5>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card text-white bg-info mb-3">
            <div className="card-header">Total Drives</div>
            <div className="card-body">
              <h5 className="card-title">{data.totalDrives}</h5>
            </div>
          </div>
        </div>
      </div>

      <div className="row mt-4">
        <div className="col-md-6">
          <h4>Placed Students</h4>
          <ul className="list-group">
            {data.placedStudentsList.map((student) => (
              <li key={student.id} className="list-group-item">
                {student.name} - {student.company}
              </li>
            ))}
          </ul>
        </div>
        <div className="col-md-6">
          <h4>Unplaced Students</h4>
          <ul className="list-group">
            {data.unplacedStudentsList.map((student) => (
              <li key={student.id} className="list-group-item">
                {student.name}
              </li>
            ))}
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

      <div className="row mt-5">
        <div className="col-md-12">
          <h4>AI Analytics</h4>
          <div className="card">
            <div className="card-body">
              <p>Click the button to generate AI-powered insights into your department's placement data.</p>
              <button className="btn btn-primary" onClick={generateInsight}>Generate Insights</button>
              {insight && <p className="mt-3"><strong>Insight:</strong> {insight}</p>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HODDashboard;
