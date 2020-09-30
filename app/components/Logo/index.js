/**
 *
 * Logo
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { Link } from 'react-router-dom';
import logo from 'images/logo.svg';

const Logo = () => (
  <div>
    <Link to="/">
      <img src={logo} alt="logo" />
    </Link>
  </div>
);

Logo.propTypes = {};

export default Logo;
