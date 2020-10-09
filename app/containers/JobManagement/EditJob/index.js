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
import { getProfessions, getLocations } from 'containers/App/actions';
import { makeSelectGlobalState } from 'containers/App/selectors';
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
    props.getProfessions();
    props.getLocations();
  }, []);

  return (
    <>
      <Loading loading={props.editJobData.loading} />
      <EditJobStyle>
        <div className="pageContent">
          {props.editJobData.jobDetail && (
            <EditJobForm
              onSubmitForm={props.onSubmitForm}
              jobDetail={props.editJobData.jobDetail}
              globalData={props.globalData}
            />
          )}
        </div>
      </EditJobStyle>
    </>
  );
}

EditJob.propTypes = {
  onSubmitForm: PropTypes.func.isRequired,
  getJobDetail: PropTypes.func.isRequired,
  editJobData: PropTypes.object,
  globalData: PropTypes.object.isRequired,
  match: PropTypes.object,
  getProfessions: PropTypes.func.isRequired,
  getLocations: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  editJobData: makeSelectEditJob(),
  globalData: makeSelectGlobalState(),
});

function mapDispatchToProps(dispatch) {
  return {
    getJobDetail: data => dispatch(getJobDetail(data)),
    getProfessions: () => dispatch(getProfessions()),
    getLocations: () => dispatch(getLocations()),
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
