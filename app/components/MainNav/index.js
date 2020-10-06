/* eslint-disable react/jsx-no-comment-textnodes */
/**
 *
 * MainNav
 *
 */

import React, { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
import classNames from 'classnames';
import Logo from 'components/Logo';
import { NavLink, Link, useHistory } from 'react-router-dom';
import Icon from 'components/Icon';
import CompanyBox from './components/CompanyBox';
import dashboardIcon from 'images/icons/mainNav/dashboard.svg';
import jobListingsIcon from 'images/icons/mainNav/jobListings.svg';
import membersIcon from 'images/icons/mainNav/members.svg';
import messagesIcon from 'images/icons/mainNav/messages.svg';
import teamIcon from 'images/icons/mainNav/team.svg';
import settingsIcon from 'images/icons/mainNav/settings.svg';
import billingIcon from 'images/icons/mainNav/billing.svg';
import postJobIcon from 'images/icons/mainNav/postJob.svg';
import plusIcon from 'images/icons/mainNav/plus.svg';
import closeMainNavIcon from 'images/icons/mainNav/closeMainNav.svg';

import MainNavStyle from './MainNavStyle';

function MainNav(props) {
  const history = useHistory();
  const [isOpenMainNav, setMainNavState] = useState(false);
  useEffect(() => {
    setMainNavState(false);
  }, [props.location.pathname])

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
          <Icon src={closeMainNavIcon} alt="" />
        </button>
        <Logo />
        <CompanyBox />
        <div className="postJobBox">
          <NavLink className="btnPostJob" to="/company/jobs/create">
            <span>
              <Icon src={postJobIcon} alt="" />
              Post Job
            </span>
          </NavLink>
        </div>
        <nav className="mainNavGroup">
          <NavLink activeClassName="isActive" to="/company/dashboard">
            <span className="mainNavText">
              <Icon src={dashboardIcon} alt="" />
              Dashboard
            </span>
          </NavLink>

          <div className={classNames(props.location.pathname.includes('/company/jobs') ? 'isActive' : '', 'wrapLinkItem')}>
            <NavLink className="mainNavText" to="/company/jobs">
              <Icon src={jobListingsIcon} alt="" />
              Job Listings
            </NavLink>
            <Link className="behaviorBox" to="/company/jobs/create">
              <Icon src={plusIcon} alt="" />
            </Link>
          </div>

          <NavLink activeClassName="isActive" to="/company/member">
            <span className="mainNavText">
              <Icon src={membersIcon} alt="" />
              Members
          </span>
          </NavLink>

          <NavLink activeClassName="isActive" to="/company/messages">
            <span className="mainNavText">
              <Icon src={messagesIcon} alt="" />
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
              <Icon src={teamIcon} alt="" />
              Team
          </span>
          </NavLink>

          <NavLink activeClassName="isActive" to="/company/settings">
            <span className="mainNavText">
              <Icon src={settingsIcon} alt="" />
              Settings
            </span>
          </NavLink>

          <NavLink activeClassName="isActive" to="/company/billing">
            <span className="mainNavText">
              <Icon src={billingIcon} alt="" />
              Billing
            </span>
          </NavLink>

          <NavLink
            to="/"
            onClick={e => {
              e.preventDefault();
              localStorage.clear();
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
