import React from 'react';
import { Link } from 'react-router-dom';
import Icon from 'components/Icon';
import postJobIcon from 'images/icons/mainNav/postJob.svg';
import teamMemberThumb from 'images/draft/teamMemberThumb.jpg';
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
              <Icon src={changeUserAvt} alt="" />
            </div>
          </div>
          <span>
            Welcome, {JSON.parse(localStorage.getItem('user_info')).userName}!
          </span>
        </Link>
      </div>
      <div className="userBoxRight">
        <Link className="btnPostNewJob" to="/company/jobs/create">
          <Icon src={postJobIcon} alt="" />
          Post New Job
        </Link>
      </div>
    </UserBoxStyle>
  );
};

export default UserBox;
