import React from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers';
import CreateJobFormStyle from './CreateJobFormStyle';
import formSchema from './formSchema';
import Step1 from '../Step1';
import Step2 from '../Step2';
import Step3 from '../Step3';

const CreateJobForm = props => {
  const {
    activeStep,
    changeStep,
    globalData,
    onSubmitForm,
  } = props;

  const { register, handleSubmit, watch, errors } = useForm({
    mode: 'onChange',
    reValidateMode: 'onChange',
    shouldFocusError: true,
    shouldUnregister: true,
    defaultValues: {},
    resolver: yupResolver(formSchema),
  });

  const watchAllFields = watch();
  return (
    <CreateJobFormStyle>
      <div className="jobForm">
        <form onSubmit={handleSubmit(onSubmitForm)}>
          <Step1
            activeStep={activeStep}
            changeStep={changeStep}
            register={register}
            errors={errors}
            locations={globalData.locations}
          />
          <Step2
            activeStep={activeStep}
            changeStep={changeStep}
            register={register}
            errors={errors}
            professions={globalData.professions}
          />
          <Step3
            activeStep={activeStep}
            changeStep={changeStep}
            watchAllFields={watchAllFields}
          />
        </form>
      </div>
    </CreateJobFormStyle>
  );
};

CreateJobForm.propTypes = {
  globalData: PropTypes.object,
  activeStep: PropTypes.string,
  changeStep: PropTypes.func,
  onSubmitForm: PropTypes.func.isRequired,
};

export default CreateJobForm;
