/**
 *
 * CreateJob
 *
 */

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import Loading from 'components/Loading';
import makeSelectCreateJob from './selectors';
import { getProfesstions, getLocations } from './actions';
import reducer from './reducer';
import saga from './saga';
import StepNav from './components/StepNav';
import CreateJobForm from './components/CreateJobForm';
import CreateJobStyle from './CreateJobStyle';

export function CreateJob(props) {
  useInjectReducer({ key: 'createJob', reducer });
  useInjectSaga({ key: 'createJob', saga });
  useEffect(() => {
    props.getProfesstions();
    props.getLocations();
  }, []);
  const [activeStep, changeStep] = useState('step1');

  return (
    <>
      <Loading loading={props.createJob.loading} />
      <CreateJobStyle>
        <div className="pageContent">
          <StepNav changeStep={changeStep} activeStep={activeStep} />
          <CreateJobForm createJob={props.createJob} activeStep={activeStep} changeStep={changeStep} />
        </div>
      </CreateJobStyle>
    </>
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
    getProfesstions: () => dispatch(getProfesstions()),
    getLocations: () => dispatch(getLocations()),
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(CreateJob);
