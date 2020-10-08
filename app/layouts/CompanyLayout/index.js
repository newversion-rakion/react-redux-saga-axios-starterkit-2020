import React from 'react';
import { Switch } from 'react-router-dom';
import MainNav from 'components/MainNav/Loadable';
import DashBoard from 'containers/DashBoard/Loadable';
import Team from 'containers/Team/Loadable';
import Jobs from 'containers/JobManagement/Jobs/Loadable';
import CreateJob from 'containers/JobManagement/CreateJob/Loadable';
import EditJob from 'containers/JobManagement/EditJob/Loadable';
import Messages from 'containers/Messages/Loadable';
import Members from 'containers/Members/Loadable';
import CreateJobSucceed from 'containers/JobManagement/CreateJobSucceed/Loadable';
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
        <RouterInterceptor path="/company/members" component={Members} />
        <RouterInterceptor exact path="/company/jobs" component={Jobs} />
        <RouterInterceptor
          exact
          path="/company/jobs/:id/edit"
          component={EditJob}
        />
        <RouterInterceptor
          exact
          path="/company/jobs/create"
          component={CreateJob}
        />
        <RouterInterceptor
          exact
          path="/company/jobs/createJobSucceed"
          component={CreateJobSucceed}
        />
        <RouterInterceptor path="/company/messages" component={Messages} />
      </Switch>
    </main>
  </CompanyLayoutStyle>
);

export default CompanyLayout;
