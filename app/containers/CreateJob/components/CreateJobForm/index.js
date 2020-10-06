import React from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers';
import CreateJobFormStyle from './CreateJobFormStyle';
import formSchema from './formSchema';
import Step1 from '../Step1';
import Step2 from '../Step2';

const CreateJobForm = props => {
  const { activeStep, changeStep } = props;

  const { register, handleSubmit, errors } = useForm({
    reValidateMode: 'onChange',
    shouldFocusError: true,
    shouldUnregister: true,
    defaultValues: {},
    resolver: yupResolver(formSchema),
  });

  const onSubmitForm = value => {
    console.log(value);
  };

  return (
    <CreateJobFormStyle>
      <div className="jobForm">
        <form onSubmit={handleSubmit(onSubmitForm)}>
          <Step1
            activeStep={activeStep}
            changeStep={changeStep}
            register={register}
            errors={errors}
          />
          <Step2
            activeStep={activeStep}
            changeStep={changeStep}
            register={register}
            errors={errors}
          />
          <button type="submit">submit</button>
        </form>
      </div>
    </CreateJobFormStyle>
  );
};

CreateJobForm.propTypes = {
  onSubmitForm: PropTypes.func,
  activeStep: PropTypes.string,
  changeStep: PropTypes.func,
};

export default CreateJobForm;
