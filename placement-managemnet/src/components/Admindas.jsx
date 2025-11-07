import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import YCJobs from './YCJobs';

const AdminDashboard = () => {
  const [data, setData] = useState(null);
  const [insight, setInsight] = useState('');

  useEffect(() => {
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
    setInsight('Based on the current data, the placement rate for Computer Science students is 15% higher than the average. Consider organizing more drives for other departments.');
  };

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-md">
        <div className="p-6">
          <h1 className="text-2xl font-bold text-gray-800">Admin Panel</h1>
        </div>
        <nav className="mt-6">
          <Link to="/manage-students" className="block px-6 py-2 text-gray-600 hover:bg-gray-200">Manage Students</Link>
          <Link to="/manage-hods" className="block px-6 py-2 text-gray-600 hover:bg-gray-200">Manage HODs</Link>
          <Link to="/create-drive" className="block px-6 py-2 text-gray-600 hover:bg-gray-200">Create Drive</Link>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-10">
        <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold text-gray-600">Total Students</h2>
            <p className="text-3xl font-bold text-gray-800 mt-2">{data.totalStudents}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold text-gray-600">Total Placed</h2>
            <p className="text-3xl font-bold text-gray-800 mt-2">{data.totalPlaced}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold text-gray-600">Total Drives</h2>
            <p className="text-3xl font-bold text-gray-800 mt-2">{data.totalDrives}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold text-gray-600">Departments</h2>
            <p className="text-3xl font-bold text-gray-800 mt-2">{data.departments}</p>
          </div>
        </div>

        {/* Recent Drives & AI Insights */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
          <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold text-gray-600">Recent Drives</h2>
            <ul className="mt-4">
              {data.recentDrives.map((drive) => (
                <li key={drive.id} className="border-b py-2 flex justify-between items-center">
                  <div>
                    <p className="font-semibold text-gray-800">{drive.company}</p>
                    <p className="text-sm text-gray-600">{drive.title}</p>
                  </div>
                  <Link to={`/drive/${drive.id}`} className="text-blue-500 hover:underline">View</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold text-gray-600">AI Insights</h2>
            <div className="mt-4">
              <button onClick={generateInsight} className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600">Generate Insight</button>
              {insight && <p className="mt-4 text-gray-600">{insight}</p>}
            </div>
          </div>
        </div>

        {/* YC Jobs */}
        <div className="mt-6 bg-white p-6 rounded-lg shadow-md">
          <YCJobs />
        </div>

      </div>
    </div>
  );
};

export default AdminDashboard;
