import React from 'react';
import { Switch } from 'react-router-dom';
import MainNav from 'components/MainNav/Loadable';
import DashBoard from 'containers/DashBoard/Loadable';
import Team from 'containers/Team/Loadable';
import Jobs from 'containers/Jobs/Loadable';
import CreateJob from 'containers/CreateJob/Loadable';
import Messages from 'containers/Messages/Loadable';
import RouterInterceptor from 'utils/routerInterceptor';
import CompanyLayoutStyle from './CompanyLayoutStyle';

// eslint-disable-next-line react/prop-types
const CompanyLayout = props => (
  <CompanyLayoutStyle>
    <MainNav {...props} />
    <main className="mainPage">
      <Switch>
        <RouterInterceptor path="/company/dashboard" component={DashBoard} />
        <RouterInterceptor path="/company/team" component={Team} />
        <RouterInterceptor exact path="/company/jobs" component={Jobs} />
        <RouterInterceptor
          exact
          path="/company/jobs/create"
          component={CreateJob}
        />
        <RouterInterceptor path="/company/messages" component={Messages} />
      </Switch>
    </main>
  </CompanyLayoutStyle>
);

export default CompanyLayout;
