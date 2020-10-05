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
import EmptyJobBox from './components/EmptyJobBox';
import { getJobs } from './actions';
import JobList from './components/JobList';
import makeSelectJob from './selectors';
import JobStyle from './JobStyle';
import reducer from './reducer';
import saga from './saga';
export function Jobs(props) {
  useInjectReducer({ key: 'jobs', reducer });
  useInjectSaga({ key: 'jobs', saga });
  useEffect(() => {
    props.getJobs();
  }, []);

  return (
    <>
      <Loading loading={props.jobs.loading} />
      {props.jobs.jobList && props.jobs.jobList.length === 0 && <EmptyJobBox />}
      {props.jobs.jobList && props.jobs.jobList.length > 0 && (
        <JobStyle>
          <div className="pageContent">
            <JobList boxTitle="Current Jobs" isCurrentJobs />
            <JobList boxTitle="Marked as Hired" />
          </div>
        </JobStyle>
      )}
    </>
  );
}

Jobs.propTypes = {
  jobs: PropTypes.object,
  getJobs: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  jobs: makeSelectJob(),
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

export default compose(withConnect)(Jobs);
