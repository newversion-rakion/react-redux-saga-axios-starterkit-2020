import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers';
import StepNav from '../StepNav';
import CreateJobFormStyle from './CreateJobFormStyle';
import formSchema from './formSchema';
import Step1 from '../Step1';
import Step2 from '../Step2';
import Step3 from '../Step3';

const CreateJobForm = props => {
  const { globalData, onSubmitForm } = props;
  const { register, handleSubmit, watch, errors, control } = useForm({
    mode: 'onChange',
    reValidateMode: 'onChange',
    shouldFocusError: true,
    shouldUnregister: true,
    defaultValues: {},
    resolver: yupResolver(formSchema),
  });

  const [coverFile, changeCoverFile] = useState({ src: '', name: '' });
  const [stepStatus, changeStepStatus] = useState({
    activeStep: 'step1',
    validStep: [],
  });

  const watchAllFields = watch();

  const onError = errorValues => {
    const { title, description, profession, compensation } = errorValues;
    if (title || description) {
      changeStepStatus({
        ...stepStatus,
        activeStep: 'step1',
      });
      return;
    }
    if (profession || compensation) {
      changeStepStatus({
        ...stepStatus,
        activeStep: 'step2',
      });
    }
  };

  return (
    <>
      <StepNav
        watchAllFields={watchAllFields}
        changeStepStatus={changeStepStatus}
        stepStatus={stepStatus}
      />
      <CreateJobFormStyle>
        <div className="jobForm">
          <form onSubmit={handleSubmit(onSubmitForm, onError)}>
            <Step1
              stepStatus={stepStatus}
              changeStepStatus={changeStepStatus}
              register={register}
              errors={errors}
              control={control}
              locations={globalData.locations}
              coverFile={coverFile}
              changeCoverFile={changeCoverFile}
            />
            <Step2
              stepStatus={stepStatus}
              changeStepStatus={changeStepStatus}
              register={register}
              errors={errors}
              control={control}
              professions={globalData.professions}
            />
            <Step3
              stepStatus={stepStatus}
              changeStepStatus={changeStepStatus}
              watchAllFields={watchAllFields}
              coverFile={coverFile}
            />
          </form>
        </div>
      </CreateJobFormStyle>
    </>
  );
};

CreateJobForm.propTypes = {
  globalData: PropTypes.object,
  activeStep: PropTypes.string,
  changeStep: PropTypes.func,
  onSubmitForm: PropTypes.func.isRequired,
};

export default CreateJobForm;
