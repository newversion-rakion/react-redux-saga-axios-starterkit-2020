import React from 'react';
import PropTypes from 'prop-types';
import { Controller } from 'react-hook-form';
import Select from 'react-select';
import classNames from 'classnames';
import formThumbStep2 from 'images/thumbs/createJob/formThumbStep2.svg';
const Step2 = ({
  register,
  errors,
  activeStep,
  changeStep,
  professions,
  control,
}) => (
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
          <Controller
            control={control}
            name="profession"
            render={({ onChange, value }) => (
              <div className="wrapReselect">
                <Select
                  placeholder="Select Profession"
                  options={professions}
                  value={value}
                  onChange={e => {
                    onChange(e);
                  }}
                />
              </div>
            )}
          />
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
  control: PropTypes.object,
};

export default Step2;
