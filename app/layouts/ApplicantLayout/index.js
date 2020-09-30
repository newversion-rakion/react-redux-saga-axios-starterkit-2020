import React from 'react';
import { Switch, Route } from 'react-router-dom';
import DashBoard from 'containers/DashBoard/Loadable';
import MainNav from 'components/MainNav/Loadable';
// eslint-disable-next-line react/prop-types
const Applicant = () => (
  <>
    <MainNav />
    <Switch>
      <Route path="/applicant/dashboard" component={DashBoard} />
    </Switch>
  </>
);

export default Applicant;
