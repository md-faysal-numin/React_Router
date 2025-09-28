import React from "react";
import { useLoaderData } from "react-router-dom";

const JobDetails = () => {
  const jobDetails = useLoaderData();
  return (
    <div className="job-details">
      <p>
        <b>Job Title: </b>
        {jobDetails.title}
      </p>
      <p>
        <b>Salary: </b>
        {jobDetails.salary}
      </p>
      <p>
        <b>Job Location: </b>
        {jobDetails.location}
      </p>
      <p>
        <b>Description: </b>
        Build and maintain React applications, collaborate with the team, ensure
        high performance and code quality.
      </p>
      <button>Apply Now</button>
    </div>
  );
};

export default JobDetails;
