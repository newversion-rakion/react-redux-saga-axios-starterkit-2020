/* eslint-disable react/jsx-no-comment-textnodes */
/**
 *
 * MainNav
 *
 */

import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import classNames from 'classnames';
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
import closeMainNavIcon from 'images/icons/mainNav/closeMainNav.svg';
import companyThumb from 'images/draft/companyThumb.svg';

import MainNavStyle from './MainNavStyle';

function MainNav() {
  const history = useHistory();
  const [isOpenMainNav, setMainNavState] = useState(false);
  return (
    <MainNavStyle>
      <button
        type="button"
        className="btnOpenMainNav"
        onClick={() => {
          setMainNavState(true);
        }}
      >
        <span />
        <span />
        <span />
      </button>
      <div
        className={classNames('mainNavOverlay', isOpenMainNav ? 'isOpen' : '')}
        onClick={() => {
          setMainNavState(false);
        }}
      />
      <div
        className={classNames('mainNavContent', isOpenMainNav ? 'isOpen' : '')}
      >
        <button
          type="button"
          className="btnCloseMainNav"
          onClick={() => {
            setMainNavState(false);
          }}
        >
          <img src={closeMainNavIcon} alt="" />
        </button>
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

        <NavLink activeClassName="isActive" to="/company/job">
          <span className="mainNavText">
            <img src={jobListingsIcon} alt="" />
            Job Listings
          </span>
          <div className="behaviorBox">
            <img src={plusIcon} alt="" />
          </div>
        </NavLink>

        <NavLink activeClassName="isActive" to="/company/jobListings">
          <span className="mainNavText">
            <img src={membersIcon} alt="" />
            Members
          </span>
        </NavLink>

        <NavLink activeClassName="isActive" to="/company/messages">
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

          <NavLink activeClassName="isActive"  to="/company/jobListings">
            <span className="mainNavText">
              <img src={settingsIcon} alt="" />
              Settings
            </span>
          </NavLink>

          <NavLink activeClassName="isActive" to="/company/jobListings">
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
      </div>
    </MainNavStyle>
  );
}

MainNav.propTypes = {};

export default MainNav;
