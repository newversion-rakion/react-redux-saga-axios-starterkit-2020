import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import Icon from 'components/Icon';
import uploadIcon from 'images/icons/upload.svg';
import formThumbStep1 from 'images/thumbs/createJob/formThumbStep1.svg';
const Step1 = ({ register, errors, activeStep, changeStep }) => (
  <div
    className={classNames(
      'stepItem',
      activeStep === 'step1' ? 'isActiveStep' : '',
    )}
  >
    <div className="formThumb">
      <img src={formThumbStep1} alt="" />
    </div>
    <div className="stepItemContent">
      <h3 className="stepTitle">
        <span>1</span>
        Enter Job Details
      </h3>
      <p className="stepDescription">
        Add the basic information about your job listing and give a brief
        description of the work and ideal candidate.
      </p>
      <div className="form-group">
        <span className="formLabel">Listing Title</span>
        <input
          className="form-control"
          name="job_title"
          type="text"
          placeholder="Enter Job Title"
          ref={register}
        />
        {errors.job_title && (
          <span className="formError">{errors.job_title.message}</span>
        )}
      </div>

      <div className="form-group">
        <span className="formLabel">
          Location <i>Optional</i>
        </span>
        <div className="wrapSelectionField">
          <select
            ref={register}
            name="location"
            required
            className="form-control"
            defaultValue=""
          >
            <option value="" disabled hidden>
              Select Location
            </option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
          </select>
        </div>
      </div>

      <div className="form-group">
        <span className="formLabel">Listing Description</span>
        <textarea
          className="form-control"
          name="description"
          placeholder="Enter Description"
          ref={register}
        />
        {errors.description && (
          <span className="formError">{errors.description.message}</span>
        )}
      </div>

      <div className="form-group">
        <span className="formLabel">
          Cover Photo <i>Optional. Will default to company logo.</i>
        </span>
        <div className="wrapUploadField">
          <label className="uploadFileThumb">
            <input type="file" ref={register} name="jobCover" />
            <Icon src={uploadIcon} alt="" />
            Upload
          </label>
          <span className="uploadFileName">file name</span>
        </div>
      </div>

      <div className="stepFooter">
        <div className="stepFooterLeft">
          <strong>Step 1</strong> of 3
        </div>
        <div className="stepFooterRight">
          <Link className="btn btnCancel" to="/company/jobs">
            Cancel
          </Link>
          <button
            type="button"
            onClick={() => {
              changeStep('step2');
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

Step1.propTypes = {
  register: PropTypes.func,
  errors: PropTypes.object,
  activeStep: PropTypes.string,
  changeStep: PropTypes.func,
};

export default Step1;
