import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Icon from 'components/Icon';
import postJobIcon from 'images/icons/job/postJob.svg';
import newApplicantsIcon from 'images/icons/job/newApplicants.svg';
import applicantIcon from 'images/icons/job/applicant.svg';
import starredIcon from 'images/icons/job/starred.svg';
import notesIcon from 'images/icons/job/notes.svg';

import JobListStyle from './JobListStyle';

const JobList = ({ boxTitle, isCurrentJobs, jobList }) => (
  <JobListStyle>
    <div className="upperBox">
      <div className="upperBoxLeft">
        <h3 className="boxTitle">{boxTitle}</h3>
      </div>
      <div className="behaviorBox">
        {isCurrentJobs && (
          <Link to="/company/jobs/create">
            <Icon src={postJobIcon} alt="" />
            Post New Job
          </Link>
        )}
      </div>
    </div>

    <div className="jobList">
      <ul>
        {jobList.map((item, i) => (
          // eslint-disable-next-line react/no-array-index-key
          <li key={i} className="jobItem">
            <div className="thumb">
              <img src={item.bacground_img} alt="" />
            </div>
            <div className="content">
              <div className="itemHeader">
                <div className="itemHeaderLeft">
                  <h3 className="jobName">{item.title}</h3>
                  <p className="createdDate">
                    {item.address}
                    <span className="time">
                      Posted <strong>{item.posted_time}</strong>
                    </span>
                  </p>
                </div>
                <div className="itemHeaderRight">
                  <Link
                    to={`/company/jobs/${item.id}/edit`}
                    className="btn btnEditJob"
                  >
                    Edit Job
                  </Link>
                </div>
              </div>
              <ul className="profession">
                {item.professions.map((professtionItem, index) => (
                  // eslint-disable-next-line react/no-array-index-key
                  <li key={index}>
                    <Link to={`company/members/${professtionItem}`}>
                      {professtionItem}
                    </Link>
                  </li>
                ))}
              </ul>
              <ul className="footerItems">
                {isCurrentJobs && (
                  <li>
                    <Link to="/">
                      <Icon src={newApplicantsIcon} alt="" />
                      {item.new_applicant_count} New Applicants
                    </Link>
                  </li>
                )}
                <li>
                  <Link to="/">
                    <Icon src={applicantIcon} alt="" />
                    {item.candidate_count} Applicants
                  </Link>
                </li>

                <li>
                  <Link to="/">
                    <Icon src={starredIcon} alt="" />
                    {item.starred_count} Starred
                  </Link>
                </li>

                <li>
                  <Link to="/">
                    <Icon src={notesIcon} alt="" />
                    {item.notes} Notes
                  </Link>
                </li>
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </div>
  </JobListStyle>
);

JobList.propTypes = {
  boxTitle: PropTypes.string,
  isCurrentJobs: PropTypes.bool,
  jobList: PropTypes.array,
};

export default JobList;
