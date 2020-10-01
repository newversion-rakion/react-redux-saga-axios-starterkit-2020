/**
 *
 * Job
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import JobList from './components/JobList';
import makeSelectJob from './selectors';
import JobStyle from './JobStyle';
import reducer from './reducer';
import saga from './saga';
export function Job() {
  useInjectReducer({ key: 'job', reducer });
  useInjectSaga({ key: 'job', saga });

  return (
    <JobStyle>
      <div className="pageContent">
        <JobList boxTitle="Current Jobs" isCurrentJobs />
        <JobList boxTitle="Marked as Hired" />
      </div>
    </JobStyle>
  );
}

const mapStateToProps = createStructuredSelector({
  job: makeSelectJob(),
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

export default compose(withConnect)(Job);
