import React from 'react';
import { Link } from 'react-router-dom';
import jobThumb from 'images/draft/jobThumb.jpg';
import applicantsIcon from 'images/icons/dashboard/applicants.svg';
import membersIcon from 'images/icons/mainNav/members.svg';
import arrowRight from 'images/icons/dashboard/arrow-right.svg';
import JobItemStyle from './JobItemStyle';
const JobItem = () => {
  return (
    <JobItemStyle>
      <div className="item">
        <div className="thumb">
          <Link to="company/job">
            <img src={jobThumb} alt="" />
          </Link>
        </div>
        <h4 className="jobName">
          <Link to="company/job">Videographer Needed</Link>
        </h4>
        <p className="createdDate">
          New York City
          <span className="time">
            Posted <strong>June 23, 2020</strong>
          </span>
        </p>
        <p className="jobInfo">
          <strong>104 Candidates</strong> (0 Starred)
        </p>
        <Link to="/" className="applicants">
          <img src={applicantsIcon} alt="" />6 New Applicants
        </Link>
      </div>

      <div className="moreJobsBox">
        <Link to="/" className="btnToMoreJobs">
          <span>
            <img src={membersIcon} alt="" />
            Browse <strong>Videographers</strong>
          </span>
          <img src={arrowRight} alt="" />
        </Link>
      </div>
    </JobItemStyle>
  );
};

export default JobItem;
