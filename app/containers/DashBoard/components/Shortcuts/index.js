import React from 'react';
import { NavLink } from 'react-router-dom';
import jobListingsIcon from 'images/icons/mainNav/jobListings.svg';
import ShortcutsStyle from './ShortcutsStyle';
const Shortcuts = () => {
  return (
    <ShortcutsStyle>
      <nav className="shortcutsBox">
        <div className="boxRow">
          <div className="boxCol">
            <NavLink className="btnEditCompany" to="/company/editCompany">
              <span>
                <img src={jobListingsIcon} alt="" />
                <strong>View</strong>Job Listings
              </span>
            </NavLink>
          </div>
          <div className="boxCol">
            <NavLink className="btnEditCompany" to="/company/editCompany">
              <span>
                <img src={jobListingsIcon} alt="" />
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
