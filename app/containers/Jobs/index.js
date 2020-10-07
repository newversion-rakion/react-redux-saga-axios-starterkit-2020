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
      {props.jobs.currentJobs.length === 0 &&
        props.jobs.hiredJobs.length === 0 && <EmptyJobBox />}
      <JobStyle>
        <div className="pageContent">
          {props.jobs.currentJobs.length > 0 && (
            <JobList
              jobList={props.jobs.currentJobs}
              boxTitle="Current Jobs"
              isCurrentJobs
            />
          )}
          {props.jobs.hiredJobs.length > 0 && (
            <JobList
              jobList={props.jobs.currentJobs}
              boxTitle="Marked as Hired"
            />
          )}
        </div>
      </JobStyle>
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
