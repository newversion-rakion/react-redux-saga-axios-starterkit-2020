import React, { useEffect } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import StepNavStyle from './StepNavStyle';

const StepNav = ({ stepStatus, changeStepStatus, watchAllFields }) => {
  useEffect(() => {
    const validStep = [];
    if (watchAllFields.title && watchAllFields.description) {
      if (!validStep.step1) {
        validStep.push('step1');
      }
    } else {
      delete validStep.step1;
    }

    if (watchAllFields.profession && watchAllFields.compensation) {
      if (!validStep.step2) {
        validStep.push('step2');
      }
    } else {
      delete validStep.step2;
    }

    console.log(stepStatus);

    changeStepStatus({
      ...stepStatus,
      validStep,
    });
  }, [
    watchAllFields.title,
    watchAllFields.description,
    watchAllFields.profession,
    watchAllFields.compensation,
  ]);

  return (
    <StepNavStyle>
      <ul className="stepNav">
        <li
          className={classNames(
            stepStatus.activeStep === 'step1' ? 'isActive' : '',
            stepStatus.validStep.includes('step1') ? 'isValid' : '',
          )}
        >
          <button
            type="button"
            onClick={() => {
              changeStepStatus({
                ...stepStatus,
                activeStep: 'step1',
              });
            }}
          >
            <span />
            <p>Job Details</p>
          </button>
        </li>
        <li
          className={classNames(
            stepStatus.activeStep === 'step2' ? 'isActive' : '',
            stepStatus.validStep.includes('step2') ? 'isValid' : '',
          )}
        >
          <button
            type="button"
            onClick={() => {
              changeStepStatus({
                ...stepStatus,
                activeStep: 'step2',
              });
            }}
          >
            <span />
            <p>Job Roles</p>
          </button>
        </li>
        <li
          className={classNames(
            stepStatus.activeStep === 'step3' ? 'isActive' : '',
          )}
        >
          <button
            type="button"
            onClick={() => {
              changeStepStatus({
                ...stepStatus,
                activeStep: 'step3',
              });
            }}
          >
            <span />
            <p>Review & Submit</p>
          </button>
        </li>
      </ul>
    </StepNavStyle>
  );
};

StepNav.propTypes = {
  changeStepStatus: PropTypes.func,
  watchAllFields: PropTypes.object,
  stepStatus: PropTypes.object,
};

export default StepNav;
