/**
 *
 * CreateJob
 *
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectCreateJob from './selectors';
import reducer from './reducer';
import saga from './saga';
import StepNav from './components/StepNav';
import CreateJobForm from './components/CreateJobForm';
import CreateJobStyle from './CreateJobStyle';

export function CreateJob() {
  useInjectReducer({ key: 'createJob', reducer });
  useInjectSaga({ key: 'createJob', saga });

  const [activeStep, changeStep] = useState('step1');

  return (
    <CreateJobStyle>
      <div className="pageContent">
        <StepNav changeStep={changeStep} activeStep={activeStep} />
        <CreateJobForm activeStep={activeStep} changeStep={changeStep} />
      </div>
    </CreateJobStyle>
  );
}

CreateJob.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  createJob: makeSelectCreateJob(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(CreateJob);
