import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "./StudentDas.css";

const StudentDashboard = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Fetch data from a mock API
    const fetchData = async () => {
      const mockData = {
        activeDrives: [
          { id: 1, company: 'Company A', title: 'Software Engineer' },
          { id: 2, company: 'Company B', title: 'Data Analyst' },
          { id: 3, company: 'Company C', title: 'Frontend Developer' },
        ],
        appliedDrives: [
          { id: 1, company: 'Company A', status: 'Applied' },
          { id: 2, company: 'Company B', status: 'Under Review' },
        ],
        upcomingRounds: [
          { id: 1, company: 'Company A', round: 'Technical Interview', date: '24th July 2024' },
          { id: 2, company: 'Company B', round: 'HR Round', date: '28th July 2024' },
        ],
        notifications: [
          { id: 1, message: 'Your application for Company A has been shortlisted.' },
          { id: 2, message: 'New placement drive added: Company D.' },
        ],
      };
      setData(mockData);
    };

    fetchData();
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container-fluid student-dashboard">
      <div className="row">
        <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-md-4">
          <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
            <h1 className="h2">Dashboard</h1>
          </div>

          <div className="row">
            <div className="col-md-6">
              <div className="card mb-4 shadow-sm">
                <div className="card-header">
                  <h4 className="my-0 font-weight-normal">Active Placement Drives</h4>
                </div>
                <div className="card-body">
                  <ul className="list-unstyled mt-3 mb-4">
                    {data.activeDrives.map((drive) => (
                      <li key={drive.id}>{drive.company} - {drive.title}</li>
                    ))}
                  </ul>
                  <Link to="/placement-drives" className="btn btn-lg btn-block btn-outline-primary">View all drives</Link>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card mb-4 shadow-sm">
                <div className="card-header">
                  <h4 className="my-0 font-weight-normal">Applied Drives Status</h4>
                </div>
                <div className="card-body">
                  <ul className="list-unstyled mt-3 mb-4">
                    {data.appliedDrives.map((drive) => (
                      <li key={drive.id}>{drive.company} - {drive.status}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6">
              <div className="card mb-4 shadow-sm">
                <div className="card-header">
                  <h4 className="my-0 font-weight-normal">Upcoming Rounds</h4>
                </div>
                <div className="card-body">
                  <ul className="list-unstyled mt-3 mb-4">
                    {data.upcomingRounds.map((round) => (
                      <li key={round.id}>{round.company} - {round.round} - {round.date}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card mb-4 shadow-sm">
                <div className="card-header">
                  <h4 className="my-0 font-weight-normal">Notifications</h4>
                </div>
                <div className="card-body">
                  <ul className="list-unstyled mt-3 mb-4">
                    {data.notifications.map((notification) => (
                      <li key={notification.id}>{notification.message}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default StudentDashboard;
