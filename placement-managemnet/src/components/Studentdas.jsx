import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const StudentDashboard = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
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
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-md">
        <div className="p-6">
          <h1 className="text-2xl font-bold text-gray-800">Student Panel</h1>
        </div>
        <nav className="mt-6">
          <Link to="/student-profile" className="block px-6 py-2 text-gray-600 hover:bg-gray-200">My Profile</Link>
          <Link to="/placement-drives" className="block px-6 py-2 text-gray-600 hover:bg-gray-200">Placement Drives</Link>
          <Link to="/my-applications" className="block px-6 py-2 text-gray-600 hover:bg-gray-200">My Applications</Link>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-10">
        <h1 className="text-3xl font-bold text-gray-800">My Dashboard</h1>

        {/* Profile & Resume Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
            <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-lg font-semibold text-gray-600">Welcome, Student!</h2>
                <p className="mt-2 text-gray-600">This is your central hub for all placement-related activities. Keep your profile updated and track your applications here.</p>
                 <div className="mt-4">
                    <Link to="/student-profile" className="text-blue-500 hover:underline">Update Profile</Link>
                    <button className="ml-4 bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600">Upload Resume</button>
                </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
                 <h2 className="text-lg font-semibold text-gray-600">Notifications</h2>
                 <ul className="mt-4 space-y-2">
                {data.notifications.map((notification) => (
                    <li key={notification.id} className="text-gray-800 text-sm">- {notification.message}</li>
                ))}
                </ul>
          </div>
        </div>

        {/* Drives & Applications */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold text-gray-600">Active Placement Drives</h2>
            <ul className="mt-4 space-y-4">
              {data.activeDrives.map((drive) => (
                <li key={drive.id} className="border-b pb-2 flex justify-between items-center">
                  <div>
                    <p className="font-semibold text-gray-800">{drive.company}</p>
                    <p className="text-sm text-gray-600">{drive.title}</p>
                  </div>
                  <Link to={`/drive/${drive.id}`} className="bg-green-500 text-white px-3 py-1 rounded-md hover:bg-green-600">Apply</Link>
                </li>
              ))}
            </ul>
            <Link to="/placement-drives" className="mt-4 text-blue-500 hover:underline block text-center">View all drives</Link>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold text-gray-600">Applied Drives Status</h2>
            <ul className="mt-4 space-y-4">
              {data.appliedDrives.map((drive) => (
                <li key={drive.id} className="border-b pb-2 flex justify-between items-center">
                    <div>
                        <p className="font-semibold text-gray-800">{drive.company}</p>
                        <span className="text-sm text-white bg-yellow-500 px-2 py-1 rounded-full">{drive.status}</span>
                    </div>
                    <Link to={`/applications/${drive.id}`} className="text-blue-500 hover:underline">Details</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Upcoming Rounds */}
        <div className="mt-6 bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold text-gray-600">Upcoming Rounds</h2>
            <ul className="mt-4 space-y-3">
              {data.upcomingRounds.map((round) => (
                <li key={round.id} className="text-gray-800 list-disc list-inside"><b>{round.company}</b> - {round.round} on {round.date}</li>
              ))}
            </ul>
        </div>

      </div>
    </div>
  );
};

export default StudentDashboard;
