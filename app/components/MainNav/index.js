/**
 *
 * MainNav
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import Logo from 'components/Logo';
import { NavLink, useHistory } from 'react-router-dom';
import dashboardIcon from 'images/icons/mainNav/dashboard.svg';
import jobListingsIcon from 'images/icons/mainNav/jobListings.svg';
import membersIcon from 'images/icons/mainNav/members.svg';
import messagesIcon from 'images/icons/mainNav/messages.svg';
import teamIcon from 'images/icons/mainNav/team.svg';
import settingsIcon from 'images/icons/mainNav/settings.svg';
import billingIcon from 'images/icons/mainNav/billing.svg';
import postJobIcon from 'images/icons/mainNav/postJob.svg';
import editIcon from 'images/icons/mainNav/edit.svg';
import plusIcon from 'images/icons/mainNav/plus.svg';
import companyThumb from 'images/draft/companyThumb.svg';

import MainNavStyle from './MainNavStyle';

function MainNav() {
  const history = useHistory();

  return (
    <MainNavStyle>
      <Logo />
      <div className="companyBox">
        <NavLink className="btnEditCompany" to="/company/editCompany">
          <span>
            <img src={companyThumb} alt="" />
            Spotify
          </span>
          <img src={editIcon} alt="" />
        </NavLink>
      </div>
      <div className="postJobBox">
        <NavLink className="btnPostJob" to="/">
          <span>
            <img src={postJobIcon} alt="" />
            Post Job
          </span>
        </NavLink>
      </div>
      <nav className="mainNavGroup">
        <NavLink activeClassName="isActive" to="/company/dashboard">
          <span className="mainNavText">
            <img src={dashboardIcon} alt="" />
            Dashboard
          </span>
        </NavLink>

        <NavLink to="/company/job">
          <span className="mainNavText">
            <img src={jobListingsIcon} alt="" />
            Job Listings
          </span>
          <div className="behaviorBox">
            <img src={plusIcon} alt="" />
          </div>
        </NavLink>

        <NavLink to="/company/jobListings">
          <span className="mainNavText">
            <img src={membersIcon} alt="" />
            Members
          </span>
        </NavLink>

        <NavLink to="/company/messages">
          <span className="mainNavText">
            <img src={messagesIcon} alt="" />
            Messages
          </span>
          <div className="behaviorBox">
            <span className="mainNavStatus">99+</span>
          </div>
        </NavLink>
      </nav>
      <nav className="mainNavGroup">
        <NavLink activeClassName="isActive" to="/company/team">
          <span className="mainNavText">
            <img src={teamIcon} alt="" />
            Team
          </span>
        </NavLink>

        <NavLink to="/company/jobListings">
          <span className="mainNavText">
            <img src={settingsIcon} alt="" />
            Settings
          </span>
        </NavLink>

        <NavLink to="/company/jobListings">
          <span className="mainNavText">
            <img src={billingIcon} alt="" />
            Billing
          </span>
        </NavLink>

        <NavLink
          to="/"
          onClick={e => {
            e.preventDefault();
            sessionStorage.clear();
            history.push('/login');
          }}
        >
          Logout
        </NavLink>
      </nav>
    </MainNavStyle>
  );
}

MainNav.propTypes = {};

export default MainNav;
