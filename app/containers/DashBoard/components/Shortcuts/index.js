import React from 'react';
import { NavLink } from 'react-router-dom';
import jobListingsIcon from 'images/icons/mainNav/jobListings.svg';
import membersIcon from 'images/icons/mainNav/members.svg';
import ShortcutsStyle from './ShortcutsStyle';
const Shortcuts = () => {
  return (
    <ShortcutsStyle>
      <h3 className="boxTitle">Shortcuts</h3>
      <nav className="shortcutsBox">
        <div className="shortcutsBoxRow">
          <div className="shortcutsBoxCol">
            <NavLink className="btnEditCompany" to="/company/editCompany">
              <div className="shortcutThumb">
                <img src={jobListingsIcon} alt="" />
              </div>
              <span>
                <strong>View</strong>Job Listings
              </span>
            </NavLink>
          </div>
          <div className="shortcutsBoxCol">
            <NavLink className="btnEditCompany" to="/company/editCompany">
              <div className="shortcutThumb">
                <img src={membersIcon} alt="" />
              </div>
              <span>
                <strong>Search</strong>Members
              </span>
            </NavLink>
          </div>
        </div>
      </nav>
    </ShortcutsStyle>
  );
};

export default Shortcuts;
