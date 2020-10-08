import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers';
import Icon from 'components/Icon';
import uploadIcon from 'images/icons/upload.svg';
import EditJobFormStyle from './EditJobFormStyle';
import formSchema from './formSchema';
import PreviewBox from '../PreviewBox';

const EditJobForm = props => {
  const { globalData, onSubmitForm, jobDetail } = props;
  const [fileName, changeFileName] = useState(jobDetail.bacground_img);

  const { register, handleSubmit, watch, errors, control } = useForm({
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
                <Controller
                  control={control}
                  name="location"
                  defaultValue={() => {
                    const { location } = jobDetail;
                    location.label = location.name;
                    delete location.name;
                    return location;
                  }}
                  render={({ onChange, value }) => (
                    <div className="wrapReselect">
                      <Select
                        options={globalData.locations.map(
                          ({ name: label, ...rest }) => ({
                            label,
                            ...rest,
                          }),
                        )}
                        defaultValue={value}
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
                <Controller
                  control={control}
                  name="profession"
                  defaultValue={() => {
                    const { profession } = jobDetail;
                    profession.label = profession.name;
                    delete profession.name;
                    return profession;
                  }}
                  render={({ onChange, value }) => (
                    <div className="wrapReselect">
                      <Select
                        options={globalData.professions.map(
                          ({ name: label, ...rest }) => ({
                            label,
                            ...rest,
                          }),
                        )}
                        defaultValue={value}
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
  globalData: PropTypes.object,
  professions: PropTypes.array,
  locations: PropTypes.array,
  jobDetail: PropTypes.object.isRequired,
  onSubmitForm: PropTypes.func.isRequired,
};

export default EditJobForm;
