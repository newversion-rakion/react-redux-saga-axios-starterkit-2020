import React from 'react';
import { Switch } from 'react-router-dom';
import DashBoard from 'containers/DashBoard/Loadable';
import Team from 'containers/Team/Loadable';
import Job from 'containers/Job/Loadable';
import MainNav from 'components/MainNav/Loadable';
import RouterInterceptor from 'utils/routerInterceptor';
import CompanyLayoutStyle from './CompanyLayoutStyle';

// eslint-disable-next-line react/prop-types
const CompanyLayout = () => (
  <CompanyLayoutStyle>
    <MainNav />
    <main className="mainPage">
      <Switch>
        <RouterInterceptor path="/company/dashboard" component={DashBoard} />
        <RouterInterceptor path="/company/team" component={Team} />
        <RouterInterceptor path="/company/job" component={Job} />
      </Switch>
    </main>
  </CompanyLayoutStyle>
);

export default CompanyLayout;
