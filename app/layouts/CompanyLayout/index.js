import React from 'react';
import { Switch, Route } from 'react-router-dom';
import DashBoard from 'containers/DashBoard/Loadable';
import MainNav from 'components/MainNav/Loadable';
import CompanyLayoutStyle from './CompanyLayoutStyle';

// eslint-disable-next-line react/prop-types
const CompanyLayout = () => (
  <CompanyLayoutStyle>
    <MainNav />
    <main className="mainPage">
      <Switch>
        <Route path="/company/dashboard" component={DashBoard} />
      </Switch>
    </main>
  </CompanyLayoutStyle>
);

export default CompanyLayout;
