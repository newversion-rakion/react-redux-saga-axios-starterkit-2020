import React from 'react';
import MainNav from 'components/MainNav/Loadable';
import CompanyLayoutStyle from './CompanyLayoutStyle';

// eslint-disable-next-line react/prop-types
const CompanyLayout = props => (
  <CompanyLayoutStyle>
    <MainNav {...props} />
    <main className="mainPage" />
  </CompanyLayoutStyle>
);

export default CompanyLayout;
