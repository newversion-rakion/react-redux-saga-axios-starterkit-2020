import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers';
import Icon from 'components/Icon';
import uploadIcon from 'images/icons/upload.svg';
import EditJobFormStyle from './EditJobFormStyle';
import formSchema from './formSchema';
import PreviewBox from '../PreviewBox';

const EditJobForm = props => {
  const {
    editJobData,
    onSubmitForm,
    locations,
    professions,
    jobDetail,
  } = props;
  const [fileName, changeFileName] = useState('file name');
  const { register, handleSubmit, watch, errors } = useForm({
    mode: 'onChange',
    reValidateMode: 'onChange',
    shouldFocusError: true,
    shouldUnregister: true,
    defaultValues: jobDetail,
    resolver: yupResolver(formSchema),
  });

  const watchAllFields = watch();

  return (
    <EditJobFormStyle>
      <div className="formRow">
        <div className="formContentCol">
          <div className="jobForm">
            <form onSubmit={handleSubmit(onSubmitForm)}>
              <h1 className="formTitle">Edit Job</h1>

              <h3 className="formSubTitle">Job Details</h3>
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
                    {locations &&
                      locations.map((item, i) => (
                        <option key={i} value={item}>
                          {item}
                        </option>
                      ))}
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
                  <span className="formError">
                    {errors.description.message}
                  </span>
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
                        changeFileName(e.target.files[0].name);
                      }}
                    />
                    <Icon src={uploadIcon} alt="" />
                    Upload
                  </label>
                  <span className="uploadFileName">{fileName}</span>
                </div>
              </div>

              <h3 className="formSubTitle">Job Details</h3>

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
                    {professions &&
                      professions.map((item, i) => (
                        <option key={i} value={item}>
                          {item}
                        </option>
                      ))}
                  </select>
                  {errors.profession && (
                    <span className="formError">
                      {errors.profession.message}
                    </span>
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
                  <span className="formError">
                    {errors.compensation.message}
                  </span>
                )}
              </div>
            </form>
          </div>
        </div>
        <div className="formPreviewCol">
          <PreviewBox watchAllFields={watchAllFields} />
        </div>
      </div>
    </EditJobFormStyle>
  );
};

EditJobForm.propTypes = {
  editJobData: PropTypes.object,
  professions: PropTypes.array,
  locations: PropTypes.array,
  jobDetail: PropTypes.object.isRequired,
  onSubmitForm: PropTypes.func.isRequired,
};

export default EditJobForm;
