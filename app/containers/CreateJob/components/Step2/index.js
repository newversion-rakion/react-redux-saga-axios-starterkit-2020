import React from 'react';
import PropTypes from 'prop-types';
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
            name="profession"
            required
            className="form-control"
            defaultValue=""
          >
            <option value="" disabled hidden>
              Select Profession
            </option>
            {professions.map((item, i) => (
              <option key={i} value={item}>
                {item}
              </option>
            ))}
          </select>
          {errors.profession && (
            <span className="formError">{errors.profession.message}</span>
          )}
        </div>
      </div>

      <div className="form-group">
        <span className="formLabel">Role Budget</span>
        <input
          className="form-control"
          name="compensation"
          type="text"
          placeholder="Enter Ideal Pay Amount (e.g. $1200 per day, $10-$20k)"
          ref={register}
        />
        {errors.compensation && (
          <span className="formError">{errors.compensation.message}</span>
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
  professions: PropTypes.array,
  changeStep: PropTypes.func,
};

export default Step2;
