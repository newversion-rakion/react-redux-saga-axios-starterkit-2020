import React from 'react';
import teamMemberThumb from 'images/draft/teamMemberThumb.jpg';
import CurrentTeamStyle from './CurrentTeamStyle';
const CurrentTeam = () => (
  <CurrentTeamStyle>
    <h3 className="boxTitle">Current Team (6)</h3>
    <ul className="userList clearfix">
      <li>
        <div className="thumb">
          <img src={teamMemberThumb} alt="" />
        </div>
        <div className="info">
          <h4 className="name">Archer Finch</h4>
          <p className="role">Chief Recruiting Officer</p>
        </div>
      </li>
      <li>
        <div className="thumb">
          <img src={teamMemberThumb} alt="" />
        </div>
        <div className="info">
          <h4 className="name">Archer Finch</h4>
          <p className="role">Chief Recruiting Officer</p>
        </div>
      </li>
      <li>
        <div className="thumb">
          <img src={teamMemberThumb} alt="" />
        </div>
        <div className="info">
          <h4 className="name">Archer Finch</h4>
          <p className="role">Chief Recruiting Officer</p>
        </div>
      </li>
      <li>
        <div className="thumb">
          <img src={teamMemberThumb} alt="" />
        </div>
        <div className="info">
          <h4 className="name">Archer Finch</h4>
          <p className="role">Chief Recruiting Officer</p>
        </div>
      </li>
    </ul>
  </CurrentTeamStyle>
);

export default CurrentTeam;
