import React, { useState, useEffect } from 'react';
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
  const [coverFile, changeCoverFile] = useState({
    src: jobDetail.bacground_img,
    name: jobDetail.bacground_img,
  });
  const {
    register,
    handleSubmit,
    watch,
    errors,
    control,
    reset,
    setValue,
  } = useForm({
    mode: 'onChange',
    reValidateMode: 'onChange',
    shouldFocusError: true,
    shouldUnregister: true,
    defaultValues: jobDetail,
    resolver: yupResolver(formSchema),
  });

  useEffect(() => {
    reset(jobDetail);
    changeCoverFile({
      src: jobDetail.bacground_img,
      name: jobDetail.bacground_img,
    });
  }, [jobDetail]);

  const watchAllFields = watch();

  return (
    <EditJobFormStyle>
      <form
        onSubmit={handleSubmit(formValue => {
          const values = {
            ...formValue,
            id: jobDetail.id,
          };
          onSubmitForm(values);
        })}
      >
        <div className="formRow">
          <div className="formContentCol">
            <div className="jobForm">
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
                  render={({ onChange, value }) => (
                    <div className="wrapReselect">
                      <Select
                        options={globalData.locations}
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

              <h3 className="formSubTitle">Job Details</h3>

              <div className="form-group">
                <span className="formLabel">Role Profession</span>
                <Controller
                  control={control}
                  name="profession"
                  render={({ onChange, value }) => (
                    <div className="wrapReselect">
                      <Select
                        options={globalData.professions}
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

              <input type="hidden" name="is_hired" ref={register} />
            </div>
          </div>
          <div className="formPreviewCol">
            <PreviewBox
              watchAllFields={watchAllFields}
              setValue={setValue}
              coverFile={coverFile}
            />
          </div>
        </div>
      </form>
    </EditJobFormStyle>
  );
};

EditJobForm.propTypes = {
  globalData: PropTypes.object,
  jobDetail: PropTypes.object.isRequired,
  onSubmitForm: PropTypes.func.isRequired,
};

export default EditJobForm;
