import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import formThumbStep2 from 'images/thumbs/createJob/formThumbStep2.svg';
const Step2 = ({ register, errors, activeStep, changeStep, professions }) => (
  <div
    className={classNames(
      'stepItem',
      activeStep === 'step2' ? 'isActiveStep' : '',
    )}
  >
    <div className="formThumb">
      <img src={formThumbStep2} alt="" />
    </div>
    <div className="stepItemContent">
      <h3 className="stepTitle">
        <span>2</span>
        Add a Role
      </h3>
      <p className="stepDescription">
        Add a Role for your listing by selecting a profession and adding a
        budget. We support one role per listing.
      </p>

      <div className="form-group">
        <span className="formLabel">Role Profession</span>
        <div className="wrapSelectionField">
          <select
            ref={register}
            name="job_profession"
            required
            className="form-control"
            defaultValue=""
          >
            <option value="" disabled hidden>
              Select Profession
            </option>
            {professions.map((item, i) => (
              <option key={i} value={item}>{item}</option>
            ))}
          </select>
          {errors.job_profession && (
            <span className="formError">{errors.job_profession.message}</span>
          )}
        </div>
      </div>

      <div className="form-group">
        <span className="formLabel">Role Budget</span>
        <input
          className="form-control"
          name="job_budget"
          type="text"
          placeholder="Enter Ideal Pay Amount (e.g. $1200 per day, $10-$20k)"
          ref={register}
        />
        {errors.job_budget && (
          <span className="formError">{errors.job_budget.message}</span>
        )}
      </div>

      <div className="stepFooter">
        <div className="stepFooterLeft">
          <strong>Step 2</strong> of 3
        </div>
        <div className="stepFooterRight">
          <button
            type="button"
            onClick={() => {
              changeStep('step1');
            }}
            className="btn btnCancel"
          >
            Back
          </button>
          <button
            type="button"
            onClick={() => {
              changeStep('step3');
            }}
            className="btn btn-primary btnNextStep"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  </div>
);

Step2.propTypes = {
  register: PropTypes.func,
  errors: PropTypes.object,
  activeStep: PropTypes.string,
  changeStep: PropTypes.func,
};

export default Step2;
