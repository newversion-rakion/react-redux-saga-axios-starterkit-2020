import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import StepNavStyle from './StepNavStyle';

const StepNav = ({ activeStep, changeStep }) => (
  <StepNavStyle>
    <ul className="stepNav">
      <li className={classNames(activeStep === 'step1' ? 'isActive' : '')}>
        <button
          type="button"
          onClick={() => {
            changeStep('step1');
          }}
        >
          <span />
          <p>Job Details</p>
        </button>
      </li>
      <li className={classNames(activeStep === 'step2' ? 'isActive' : '')}>
        <button
          type="button"
          onClick={() => {
            changeStep('step2');
          }}
        >
          <span />
          <p>Job Roles</p>
        </button>
      </li>
      <li className={classNames(activeStep === 'step3' ? 'isActive' : '')}>
        <button
          type="button"
          onClick={() => {
            changeStep('step3');
          }}
        >
          <span />
          <p>Review & Submit</p>
        </button>
      </li>
    </ul>
  </StepNavStyle>
);

StepNav.propTypes = {
  activeStep: PropTypes.string,
  changeStep: PropTypes.func,
};

export default StepNav;
