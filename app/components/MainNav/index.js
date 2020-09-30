/**
 *
 * MainNav
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import Logo from 'components/Logo';
import { Link, useHistory } from 'react-router-dom';
import dashboardIcon from 'images/icons/mainNav/dashboard.svg';
import jobListingsIcon from 'images/icons/mainNav/jobListings.svg';
import membersIcon from 'images/icons/mainNav/members.svg';
import messagesIcon from 'images/icons/mainNav/messages.svg';
import teamIcon from 'images/icons/mainNav/team.svg';
import settingsIcon from 'images/icons/mainNav/settings.svg';
import billingIcon from 'images/icons/mainNav/billing.svg';
import postJobIcon from 'images/icons/mainNav/postJob.svg';

import MainNavStyle from './MainNavStyle';

function MainNav() {
  const history = useHistory();
  return (
    <MainNavStyle>
      <Logo />
      <div className="postJobBox">
        <Link className="btnPostJob" to="/postJob">
          <img src={postJobIcon} alt="" />
          Post Job
        </Link>
      </div>
      <nav className="mainNavGroup">
        <Link to="/company/dashboard">
          <img src={dashboardIcon} alt="" />
          Dashboard
        </Link>

        <Link to="/company/jobListings">
          <img src={jobListingsIcon} alt="" />
          Job Listings
        </Link>

        <Link to="/company/jobListings">
          <img src={membersIcon} alt="" />
          Members
        </Link>

        <Link to="/company/messages">
          <img src={messagesIcon} alt="" />
          Messages
        </Link>
      </nav>
      <nav className="mainNavGroup">
        <Link to="/company/dashboard">
          <img src={teamIcon} alt="" />
          Team
        </Link>

        <Link to="/company/jobListings">
          <img src={settingsIcon} alt="" />
          Settings
        </Link>

        <Link to="/company/jobListings">
          <img src={billingIcon} alt="" />
          Billing
        </Link>

        <Link
          to="/"
          onClick={e => {
            e.preventDefault();
            sessionStorage.clear();
            history.push('/login');
          }}
        >
          Logout
        </Link>
      </nav>
    </MainNavStyle>
  );
}

MainNav.propTypes = {};

export default MainNav;
