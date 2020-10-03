import React from 'react';
import PropTypes from 'prop-types';
import teamMemberThumb from 'images/draft/teamMemberThumb.jpg';
import CurrentTeamStyle from './CurrentTeamStyle';
const CurrentTeam = ({ currentTeamList }) => {
  const currentTeamListLength =
    currentTeamList.length > 1 ? currentTeamListLength.length : 1;

  return (
    <CurrentTeamStyle>
      <h3 className="boxTitle">Current Team ({currentTeamListLength})</h3>
      <ul className="userList clearfix">
        {currentTeamList &&
          currentTeamList.map(user => (
            <li key={user.id}>
              <div className="thumb">
                <img src={teamMemberThumb} alt="" />
              </div>
              <div className="info">
                <h4 className="name">{user.name}</h4>
                <p className="role">{user.role}</p>
              </div>
            </li>
          ))}

        {currentTeamList.length === 0 && (
          <li>
            <div className="thumb">
              <img src={teamMemberThumb} alt="" />
            </div>
            <div className="info">
              <h4 className="name">
                {JSON.parse(localStorage.getItem('user_info')).userName}
              </h4>
              <p className="role">
                {JSON.parse(localStorage.getItem('user_info')).userRole}
              </p>
            </div>
          </li>
        )}
      </ul>
    </CurrentTeamStyle>
  );
};

CurrentTeam.propTypes = {
  currentTeamList: PropTypes.array,
};

export default CurrentTeam;
