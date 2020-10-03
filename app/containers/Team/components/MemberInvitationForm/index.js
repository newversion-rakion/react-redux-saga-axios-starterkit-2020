import React from 'react';
import { useForm } from 'react-hook-form';
import PropTypes from 'prop-types';
import { yupResolver } from '@hookform/resolvers';
import * as yup from 'yup';
import MemberInvitationFormStyle from './MemberInvitationFormStyle';

const MemberInvitationForm = ({ onSubmitForm }) => {
  const schema = yup.object().shape({
    email: yup
      .string()
      .email('This field must be a valid email')
      .required('Email is required'),
  });

  const { register, handleSubmit, errors, formState } = useForm({
    mode: 'onChange',
    shouldFocusError: true,
    shouldUnregister: true,
    defaultValues: {},
    resolver: yupResolver(schema),
  });

  const { isValid } = formState;

  return (
    <MemberInvitationFormStyle>
      <form onSubmit={handleSubmit(onSubmitForm)}>
        <div className="form-group">
          <input
            className="form-control"
            name="email"
            placeholder="Enter team member’s email address"
            type="text"
            ref={register}
          />
          {errors.email && (
            <span className="formError">{errors.email.message}</span>
          )}
          {isValid && (
            <button type="submit" className="btn btn-primary btnSubmit">
              Send
            </button>
          )}
        </div>
      </form>
    </MemberInvitationFormStyle>
  );
};

MemberInvitationForm.propTypes = {
  onSubmitForm: PropTypes.func,
};

export default MemberInvitationForm;
