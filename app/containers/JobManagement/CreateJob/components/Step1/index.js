import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Controller } from 'react-hook-form';
import Select from 'react-select';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import Icon from 'components/Icon';
import uploadIcon from 'images/icons/upload.svg';
import formThumbStep1 from 'images/thumbs/createJob/formThumbStep1.svg';

const Step1 = ({
  register,
  errors,
  stepStatus,
  changeStepStatus,
  locations,
  control,
  changeCoverFile,
  coverFile,
}) => (
  <div
    className={classNames(
      'stepItem',
      stepStatus.activeStep === 'step1' ? 'isActiveStep' : '',
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
          name="title"
          type="text"
          placeholder="Enter Job Title"
          ref={register}
        />
        {errors.title && (
          <span className="formError">{errors.title.message}</span>
        )}
      </div>

      <div className="form-group">
        <span className="formLabel">
          Location <i>Optional</i>
        </span>
        <Controller
          control={control}
          name="location"
          render={({ onChange, value }) => (
            <div className="wrapReselect">
              <Select
                placeholder="Select Location"
                options={locations}
                value={value}
                onChange={e => {
                  onChange(e);
                }}
              />
            </div>
          )}
        />
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
            <input
              type="file"
              ref={register}
              accept="image/*"
              name="cover_photo_file"
              onChange={e => {
                changeCoverFile({
                  src: URL.createObjectURL(e.target.files[0]),
                  name: e.target.files[0].name,
                });
              }}
            />
            <Icon src={uploadIcon} alt="" />
            Upload
          </label>
          <span className="uploadFileName">{coverFile.name}</span>
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
              changeStepStatus({
                ...stepStatus,
                activeStep: 'step2',
              });
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
  locations: PropTypes.array,
  stepStatus: PropTypes.object,
  changeStepStatus: PropTypes.func,
  control: PropTypes.object,
  coverFile: PropTypes.object,
  changeCoverFile: PropTypes.func,
};

export default Step1;
