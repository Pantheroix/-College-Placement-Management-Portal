import React, { useState, useEffect } from 'react';

const HODDashboard = () => {
  const [data, setData] = useState(null);
  const [insight, setInsight] = useState('');
  const [announcement, setAnnouncement] = useState('');
  const [announcements, setAnnouncements] = useState([
    'Upcoming placement drive by Company G on 1st August 2024.',
  ]);

  useEffect(() => {
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
    setInsight('The top-performing students in your department are excelling in interviews with tech companies. Consider offering more mock interviews to other students.');
  };

  const handleAnnouncementSubmit = (e) => {
    e.preventDefault();
    console.log('New Announcement:', announcement);
    setAnnouncements([...announcements, announcement]);
    setAnnouncement('');
    alert('Announcement posted successfully!');
  };

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-md">
        <div className="p-6">
          <h1 className="text-2xl font-bold text-gray-800">HOD Panel</h1>
        </div>
        <nav className="mt-6">
          <a href="#" className="block px-6 py-2 text-gray-600 hover:bg-gray-200">Dashboard</a>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-10">
        <h1 className="text-3xl font-bold text-gray-800">Department Dashboard</h1>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold text-gray-600">Placed Students</h2>
            <p className="text-3xl font-bold text-green-500 mt-2">{data.placedStudents}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold text-gray-600">Unplaced Students</h2>
            <p className="text-3xl font-bold text-red-500 mt-2">{data.unplacedStudents}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold text-gray-600">Total Drives</h2>
            <p className="text-3xl font-bold text-gray-800 mt-2">{data.totalDrives}</p>
          </div>
        </div>

        {/* Announcements & AI Insights */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
          <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold text-gray-600">Announcements</h2>
            <ul className="mt-4">
              {announcements.map((ann, index) => (
                <li key={index} className="border-b py-2 text-gray-800">{ann}</li>
              ))}
            </ul>
            <form onSubmit={handleAnnouncementSubmit} className="mt-4">
              <textarea
                className="w-full p-2 border border-gray-300 rounded-md"
                rows="3"
                value={announcement}
                onChange={(e) => setAnnouncement(e.target.value)}
                placeholder="Post a new announcement..."
                required
              ></textarea>
              <button type="submit" className="mt-2 w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600">Post Announcement</button>
            </form>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold text-gray-600">AI Insights</h2>
            <div className="mt-4">
              <button onClick={generateInsight} className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600">Generate Insight</button>
              {insight && <p className="mt-4 text-gray-600">{insight}</p>}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default HODDashboard;
