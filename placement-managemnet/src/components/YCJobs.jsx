import React, { useState, useEffect } from 'react';

const YCJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch('https://api.allorigins.win/raw?url=https://www.ycombinator.com/jobs');
        const html = await response.text();

        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');
        const dataElement = doc.querySelector('[data-page]');

        if (dataElement) {
          const pageData = JSON.parse(dataElement.getAttribute('data-page'));
          if (pageData && pageData.props && pageData.props.jobPostings) {
            setJobs(pageData.props.jobPostings);
          }
        }
      } catch (error) {
        console.error('Error fetching YC jobs:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  if (loading) {
    return <p>Loading YC jobs...</p>;
  }

  return (
    <div className="container mt-5">
      <h2>Y Combinator Jobs</h2>
      <ul className="list-group">
        {jobs.map((job) => (
          <li key={job.id} className="list-group-item">
            <h5>{job.title}</h5>
            <p>{job.companyName} - {job.location}</p>
            <p>{job.salaryRange}</p>
            <a href={`https://www.ycombinator.com${job.url}`} target="_blank" rel="noopener noreferrer" className="btn btn-primary">View Job</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default YCJobs;
