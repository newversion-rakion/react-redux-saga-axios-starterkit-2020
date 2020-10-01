import React from 'react';
import { useForm } from 'react-hook-form';
import MemberInvitationFormStyle from './MemberInvitationFormStyle';

const MemberInvitationForm = () => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = value => {
    console.log(value);
  };

  return (
    <MemberInvitationFormStyle>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <input
            className="form-control"
            name="company_invite"
            placeholder="Enter team member’s email address"
            type="text"
            ref={register({ required: true })}
          />
          {errors.company_invite && (
            <span className="formError">This field is required</span>
          )}
          <button type="submit" className="btn btn-primary btnSubmit">
            Send
          </button>
        </div>
      </form>
    </MemberInvitationFormStyle>
  );
};

export default MemberInvitationForm;
