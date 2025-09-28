import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const Jobs = () => {
  const jobsData = useLoaderData();
  return (
    <div className="jobs">
      {jobsData.map((job) => (
        <Link key={job.id} to={`${job.id}`}>
          <h4>{job.title}</h4>
          <h4>{job.location}</h4>
        </Link>
      ))}
    </div>
  );
};

export default Jobs;
