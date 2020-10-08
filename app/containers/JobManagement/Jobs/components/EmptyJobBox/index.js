import React from 'react';
import { Link } from 'react-router-dom';
import postJobIcon from 'images/icons/job/postJob.svg';
import emptyJobIcon from 'images/icons/job/emptyJob.svg';
import EmptyJobBoxStyle from './EmptyJobBoxStyle';

const EmptyJobBox = () => (
  <EmptyJobBoxStyle>
    <div className="emptyJobBoxItem">
      <img className="itemThumb" src={emptyJobIcon} alt="" />
      <h3 className="itemTitle">You haven’t posted any jobs.</h3>
      <p className="itemDescription">
        Starting finding talent on Mixer by posting your first job listing!
      </p>
      <Link className="btnCreateJob" to="/company/jobs/create">
        <img src={postJobIcon} alt="" />
        Post New Job
      </Link>
    </div>
  </EmptyJobBoxStyle>
);

export default EmptyJobBox;
