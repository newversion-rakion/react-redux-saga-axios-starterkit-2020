/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import { Switch, Route } from 'react-router-dom';

import CompanyLayout from 'layouts/CompanyLayout';
import ApplicantLayout from 'layouts/ApplicantLayout';
import Login from 'containers/Login/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import GlobalStyle from '../../global-styles';

export default function App() {
  return (
    <div>
      <Helmet
        titleTemplate="Mixer, The Creative Network"
        defaultTitle="Mixer, The Creative Network"
      >
        <meta name="description" content="Mixer, The Creative Network" />
      </Helmet>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/login" exact component={Login} />
        <Route path="/company" component={CompanyLayout} />
        <Route path="/applicant" component={ApplicantLayout} />
        <Route path="" component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </div>
  );
}
