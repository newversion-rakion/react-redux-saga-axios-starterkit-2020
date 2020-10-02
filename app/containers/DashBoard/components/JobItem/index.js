import React from 'react';
import { Link } from 'react-router-dom';
import dashboardJobThumb from 'images/draft/dashboardJobThumb.jpg';
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
            <img src={dashboardJobThumb} alt="" />
          </Link>
        </div>
        <div className="itemContent">
          <h4 className="jobName">
            <Link to="company/job">Videographer Needed</Link>
          </h4>
          <p className="createdDate">
            Los Angeles
            <span className="time">
              Posted <strong>June 23</strong>
            </span>
          </p>
          <p className="jobInfo">
            <strong>104 Candidates</strong> (0 Starred)
          </p>
          <Link to="/" className="applicants">
            <img src={applicantsIcon} alt="" />6 New Applicants
          </Link>
        </div>
      </div>

      <div className="moreJobsBox">
        <Link to="/" className="btnToMoreJobs">
          <span>
            <img src={membersIcon} alt="" />
            Browse<strong>&nbsp;Videographers</strong>
          </span>
          <img src={arrowRight} alt="" />
        </Link>
      </div>
    </JobItemStyle>
  );
};

export default JobItem;
