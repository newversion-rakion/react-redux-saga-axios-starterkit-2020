/**
 *
 * EditJob
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
import EditJobForm from './components/EditJobForm';
import makeSelectEditJob from './selectors';
import { getJobDetail, editJob } from './actions';
import reducer from './reducer';
import saga from './saga';
import EditJobStyle from './EditJobStyle';

export function EditJob(props) {
  useInjectReducer({ key: 'editJobData', reducer });
  useInjectSaga({ key: 'editJobData', saga });
  useEffect(() => {
    props.getJobDetail(props.match.params.id);
  }, []);

  return (
    <>
      <Loading loading={props.editJobData.loading} />
      <EditJobStyle>
        <div className="pageContent">
          <EditJobForm
            onSubmitForm={props.onSubmitForm}
            jobDetail={props.editJobData.jobDetail}
          />
        </div>
      </EditJobStyle>
    </>
  );
}

EditJob.propTypes = {
  onSubmitForm: PropTypes.func.isRequired,
  getJobDetail: PropTypes.func.isRequired,
  editJobData: PropTypes.object,
  match: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  editJobData: makeSelectEditJob(),
});

function mapDispatchToProps(dispatch) {
  return {
    getJobDetail: data => dispatch(getJobDetail(data)),
    onSubmitForm: data => {
      if (data !== undefined && data.preventDefault) data.preventDefault();
      dispatch(editJob(data));
    },
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(EditJob);
