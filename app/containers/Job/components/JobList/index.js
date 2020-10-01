import React from 'react';
import { Link } from 'react-router-dom';
import postJobIcon from 'images/icons/job/postJob.svg';
import jobThumb from 'images/draft/jobThumb.jpg';
import newApplicantsIcon from 'images/icons/job/newApplicants.svg';
import applicantIcon from 'images/icons/job/applicant.svg';
import starredIcon from 'images/icons/job/starred.svg';
import notesIcon from 'images/icons/job/notes.svg';

import JobListStyle from './JobListStyle';

const JobList = ({ boxTitle, isCurrentJobs }) => (
  <JobListStyle>
    <div className="upperBox">
      <div className="upperBoxLeft">
        <h3 className="boxTitle">{boxTitle}</h3>
      </div>
      <div className="behaviorBox">
        {isCurrentJobs && (
          <Link to="/">
            <img src={postJobIcon} alt="" />
            Post New Job
          </Link>
        )}
      </div>
    </div>

    <div className="jobList">
      <ul>
        <li className="jobItem">
          <div className="thumb">
            <img src={jobThumb} alt="" />
          </div>
          <div className="content">
            <div className="itemHeader">
              <div className="itemHeaderLeft">
                <h3 className="jobName">Videographer Needed</h3>
                <p className="createdDate">
                  New York City
                  <span className="time">
                    Posted <strong>June 23, 2020</strong>
                  </span>
                </p>
              </div>
              <div className="itemHeaderRight">
                <Link to="/" className="btn btnEditJob">
                  Edit Job
                </Link>
              </div>
            </div>
            <ul className="jobTags">
              <li>
                <Link to="/">Videographers</Link>
              </li>
              <li>
                <Link to="/">Designer</Link>
              </li>
            </ul>
            <ul className="footerItems">
              {isCurrentJobs && (
                <li>
                  <Link to="/">
                    <img src={newApplicantsIcon} alt="" />6 New Applicants
                  </Link>
                </li>
              )}
              <li>
                <Link to="/">
                  <img src={applicantIcon} alt="" />
                  104 Applicants
                </Link>
              </li>

              <li>
                <Link to="/">
                  <img src={starredIcon} alt="" />3 Starred
                </Link>
              </li>

              <li>
                <Link to="/">
                  <img src={notesIcon} alt="" />2 Notes
                </Link>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  </JobListStyle>
);

export default JobList;
