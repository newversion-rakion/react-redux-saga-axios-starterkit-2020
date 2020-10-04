/**
 *
 * Job
 *
 */

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import Loading from 'components/Loading';
import { getJobs } from './actions';
import JobList from './components/JobList';
import makeSelectJob from './selectors';
import JobStyle from './JobStyle';
import reducer from './reducer';
import saga from './saga';
export function Job(props) {
  useInjectReducer({ key: 'job', reducer });
  useInjectSaga({ key: 'job', saga });
  useEffect(() => {
    props.getJobs();
  }, []);
  return (
    <>
      <Loading loading={props.job.loading} />
      <JobStyle>
        <div className="pageContent">
          <JobList boxTitle="Current Jobs" isCurrentJobs />
          <JobList boxTitle="Marked as Hired" />
        </div>
      </JobStyle>
    </>
  );
}

Job.propTypes = {
  job: PropTypes.object,
  getJobs: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  job: makeSelectJob(),
});

function mapDispatchToProps(dispatch) {
  return {
    getJobs: () => dispatch(getJobs()),
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(Job);
