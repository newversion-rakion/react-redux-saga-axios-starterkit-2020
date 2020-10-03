import React from 'react';
import { Link } from 'react-router-dom';
import teamMemberThumb from 'images/draft/teamMemberThumb.jpg';
import postNewJobIcon from 'images/icons/dashboard/postNewJob.svg';
import changeUserAvt from 'images/icons/dashboard/changeUserAvt.svg';
import UserBoxStyle from './UserBoxStyle';

const UserBox = () => {
  return (
    <UserBoxStyle>
      <div className="userBoxLeft">
        <Link to="/company/settings" className="btnToSettings">
          <div className="userAvt">
            <div className="inner">
              <img src={teamMemberThumb} alt="" />
            </div>
            <div className="smallIcon">
              <img src={changeUserAvt} alt="" />
            </div>
          </div>
          <span>
            Welcome, {JSON.parse(localStorage.getItem('user_info')).userName}!
          </span>
        </Link>
      </div>
      <div className="userBoxRight">
        <Link className="btnPostNewJob" to="/company/job/create">
          <img src={postNewJobIcon} alt="" />
          Post New Job
        </Link>
      </div>
    </UserBoxStyle>
  );
};

export default UserBox;
