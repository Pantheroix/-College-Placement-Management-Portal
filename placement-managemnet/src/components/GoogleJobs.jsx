import React, { useState, useEffect } from 'react';

const GoogleJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch('https://api.allorigins.win/raw?url=https://www.google.com/about/careers/applications/jobs/results');
        const html = await response.text();

        const scriptTag = html.match(/AF_initDataCallback\(\{key: 'ds:1', hash: '1', data:(.*?), sideChannel: \{\}\}\);/s);
        if (scriptTag && scriptTag[1]) {
          const data = JSON.parse(scriptTag[1]);
          const jobPostings = data[0];
          setJobs(jobPostings.map(job => ({
            id: job[0],
            title: job[1],
            url: job[2],
            company: job[5],
            location: job[6][0][0],
            description: job[7][1],
            minQualifications: job[18][1],
          })));
        }
      } catch (error) {
        console.error('Error fetching Google jobs:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  if (loading) {
    return <p>Loading Google jobs...</p>;
  }

  return (
    <div className="container mt-5">
      <h2>Google Careers</h2>
      <ul className="list-group">
        {jobs.map((job) => (
          <li key={job.id} className="list-group-item">
            <h5>{job.title}</h5>
            <p>{job.company} - {job.location}</p>
            <a href={job.url} target="_blank" rel="noopener noreferrer" className="btn btn-primary">View Job</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GoogleJobs;
