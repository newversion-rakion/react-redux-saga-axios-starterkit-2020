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
import ReactNotification from 'react-notifications-component';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import LoggedLayout from 'layouts/LoggedLayout';
import ScrolToTop from 'components/ScrollToTop';
import Login from 'containers/Login/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import GlobalStyle from '../../global-styles';
import reducer from './reducer';
import saga from './saga';

export default function App() {
  useInjectReducer({ key: 'global', reducer });
  useInjectSaga({ key: 'global', saga });
  return (
    <div>
      <Helmet
        titleTemplate="React Starterkit, The Creative Network"
        defaultTitle="React Starterkit, The Creative Network"
      >
        <meta
          name="description"
          content="React Starterkit, The Creative Network"
        />
      </Helmet>
      <ReactNotification />
      <ScrolToTop />
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/login" exact component={Login} />
        <Route path="/company" component={LoggedLayout} />
        <Route path="" component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </div>
  );
}
