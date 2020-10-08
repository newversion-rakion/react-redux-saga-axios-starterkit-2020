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
import { getProfessions, getLocations, createJob } from './actions';
import { RESET_CREATE_JOBDATA_REDUCER } from './constants';
import reducer from './reducer';
import saga from './saga';
import StepNav from './components/StepNav';
import CreateJobForm from './components/CreateJobForm';
import CreateJobStyle from './CreateJobStyle';

export function CreateJob(props) {
  useInjectReducer({ key: 'createJobData', reducer });
  useInjectSaga({ key: 'createJobData', saga });
  useEffect(() => {
    props.dispatch({
      type: RESET_CREATE_JOBDATA_REDUCER,
    });
  }, []);

  useEffect(() => {
    props.getProfessions();
    props.getLocations();
  }, []);
  const [activeStep, changeStep] = useState('step1');

  return (
    <>
      <Loading loading={props.createJobData.loading} />
      <CreateJobStyle>
        <div className="pageContent">
          <StepNav changeStep={changeStep} activeStep={activeStep} />
          <CreateJobForm
            onSubmitForm={props.onSubmitForm}
            createJobData={props.createJobData}
            activeStep={activeStep}
            changeStep={changeStep}
          />
        </div>
      </CreateJobStyle>
    </>
  );
}

CreateJob.propTypes = {
  dispatch: PropTypes.func.isRequired,
  createJobData: PropTypes.object.isRequired,
  getProfessions: PropTypes.func.isRequired,
  getLocations: PropTypes.func.isRequired,
  onSubmitForm: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  createJobData: makeSelectCreateJob(),
});

function mapDispatchToProps(dispatch) {
  return {
    getProfessions: () => dispatch(getProfessions()),
    getLocations: () => dispatch(getLocations()),
    onSubmitForm: data => {
      if (data !== undefined && data.preventDefault) data.preventDefault();
      dispatch(createJob(data));
    },
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(CreateJob);
