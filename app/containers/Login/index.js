/**
 *
 * Login
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import Logo from 'components/Logo';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import Loading from 'components/Loading';
import LoginForm from './components/LoginForm';
import makeSelectLogin from './selectors';
import reducer from './reducer';
import { login } from './actions';
import saga from './saga';
import LoginStyle from './LoginStyle';

export function Login(props) {
  useInjectReducer({ key: 'login', reducer });
  useInjectSaga({ key: 'login', saga });
  return (
    <div>
      <Helmet>
        <title>Login</title>
        <meta name="description" content="Login Page" />
      </Helmet>
      <Loading loading={props.login.loading} />
      <LoginStyle>
        <div className="pageContent">
          <Logo />
          <LoginForm onSubmitForm={props.onSubmitForm} />
        </div>
      </LoginStyle>
    </div>
  );
}

Login.propTypes = {
  onSubmitForm: PropTypes.func,
  login: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  login: makeSelectLogin(),
});

function mapDispatchToProps(dispatch) {
  return {
    onSubmitForm: data => {
      if (data !== undefined && data.preventDefault) data.preventDefault();
      dispatch(login(data));
    },
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(Login);
