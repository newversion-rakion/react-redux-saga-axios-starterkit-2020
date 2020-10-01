import React from 'react';
import { useForm } from 'react-hook-form';
import PropTypes from 'prop-types';
import { Link, useHistory } from 'react-router-dom';
import LoginFormStyle from './LoginFormStyle';
export default function LoginForm({ onSubmitForm }) {
  const { register, handleSubmit, errors } = useForm();
  // const history = useHistory();
  // const onSubmit = () => {
  //   localStorage.setItem('token', 'draftToken');
  //   history.push('/company/team');
  // };

  return (
    <LoginFormStyle>
      <form onSubmit={handleSubmit(onSubmitForm)}>
        <div className="form-group">
          <input
            className="form-control"
            name="email"
            placeholder="Work Email Address"
            ref={register}
          />
        </div>
        <div className="form-group">
          <input
            name="password"
            className="form-control"
            placeholder="Enter Password"
            type="password"
            ref={register({ required: true })}
          />
          {errors.password && (
            <span className="formError">This field is required</span>
          )}
        </div>

        <button type="submit" className="btn btn-primary btnSubmit">
          Log In
        </button>
        <Link className="btnForgotPassword" to="/">
          Forgot Password?
        </Link>
        <div className="createNewAccountBox">
          <Link to="/">Create New Account</Link>
        </div>
      </form>
    </LoginFormStyle>
  );
}

LoginForm.propTypes = {
  onSubmitForm: PropTypes.func,
};
