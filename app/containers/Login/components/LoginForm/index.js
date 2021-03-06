import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers';
import * as yup from 'yup';
import LoginFormStyle from './LoginFormStyle';

const schema = yup.object().shape({
  auth_email: yup
    .string()
    .email('This field must be a valid email')
    .required('Email is required'),
  password: yup.string().required('Password is required'),
});

export default function LoginForm({ onSubmitForm }) {
  const { register, handleSubmit, errors } = useForm({
    reValidateMode: 'onChange',
    shouldFocusError: true,
    shouldUnregister: true,
    defaultValues: {},
    resolver: yupResolver(schema),
  });

  return (
    <LoginFormStyle>
      <form onSubmit={handleSubmit(onSubmitForm)}>
        <div className="form-group">
          <input
            className="form-control"
            name="auth_email"
            placeholder="Work Email Address"
            ref={register}
          />
          {errors.auth_email && (
            <span className="formError">{errors.auth_email.message}</span>
          )}
        </div>
        <div className="form-group">
          <input
            name="password"
            className="form-control"
            placeholder="Enter Password"
            type="password"
            ref={register}
          />
          {errors.password && (
            <span className="formError">{errors.password.message}</span>
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
