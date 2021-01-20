import React from 'react';
import MainNav from 'components/MainNav/Loadable';
import LoggedLayoutStyle from './LoggedLayoutStyle';

// eslint-disable-next-line react/prop-types
const CompanyLayout = props => (
  <LoggedLayoutStyle>
    <MainNav {...props} />
    <main className="mainPage" />
  </LoggedLayoutStyle>
);

export default CompanyLayout;
