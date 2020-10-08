import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Icon from 'components/Icon';
import applicantsIcon from 'images/icons/dashboard/applicants.svg';
import emptyJobIcon from 'images/icons/dashboard/emptyJob.svg';
import membersIcon from 'images/icons/mainNav/members.svg';
import arrowRight from 'images/icons/dashboard/arrow-right.svg';
import JobsStyle from './JobsStyle';
const Jobs = ({ jobs }) => (
  <JobsStyle>
    <div className="upperBox">
      <h3 className="boxTitle">Job Listings</h3>
      {jobs.length > 0 && <Link to="/company/jobs">View All</Link>}
    </div>
    <div className="jobListingsBoxRow">
      {jobs.length === 0 && (
        <div className="jobEmptyBox">
          <div className="jobEmptyBoxItem">
            <div>
              <img src={emptyJobIcon} alt="" />
              <span>You have not posted any jobs.</span>
            </div>
          </div>
        </div>
      )}
      {jobs &&
        jobs.map(item => (
          <div key={item.id} className="jobListingsBoxCol">
            <div className="jobBoxContent">
              <div className="item">
                <div className="thumb">
                  <Link to="company/job">
                    <img src={item.bacground_img} alt="" />
                  </Link>
                </div>
                <div className="itemContent">
                  <h4 className="jobName">
                    <Link to="company/job">{item.title}</Link>
                  </h4>
                  <p className="createdDate">
                    {item.address}
                    <span className="time">
                      Posted&nbsp;
                      <strong>{item.posted_time}</strong>
                    </span>
                  </p>
                  <p className="jobInfo">
                    <strong>{item.candidate_count} Candidates</strong> (
                    {item.starred_count} Starred)
                  </p>
                  <Link to="/" className="applicants">
                    <img src={applicantsIcon} alt="" />6 New Applicants
                  </Link>
                </div>
              </div>

              <div className="moreJobsBox">
                <Link
                  to={`/company/members/${item.profession &&
                    item.profession.id}`}
                  className="btnToMoreJobs"
                >
                  <span>
                    <Icon src={membersIcon} alt="" />
                    Browse
                    <strong>
                      &nbsp;{item.profession && item.profession.name}
                    </strong>
                  </span>
                  <Icon src={arrowRight} alt="" />
                </Link>
              </div>
            </div>
          </div>
        ))}
    </div>
  </JobsStyle>
);

Jobs.propTypes = {
  jobs: PropTypes.array,
};

export default Jobs;
