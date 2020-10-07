/**
 *
 * CreateJobSucceed
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Link } from 'react-router-dom';
import Icon from 'components/Icon';
import membersIcon from 'images/icons/mainNav/members.svg';
import formThumbStep4 from 'images/thumbs/createJob/formThumbStep4.svg';
import iconSuccessCircle from 'images/icons/icon-success-circle.svg';
import CreateJobSucceedStyle from './CreateJobSucceedStyle';

export function CreateJobSucceed() {
  return (
    <CreateJobSucceedStyle>
      <div className="pageContent">
        <div className="item">
          <div className="createJobSucceedScreenThumb">
            <img src={formThumbStep4} alt="" />
          </div>
          <div className="createJobSucceedScreenContent">
            <img src={iconSuccessCircle} alt="" />
            <h4>You’ve successfully posted your listing!</h4>
            <p>
              Start searching for potential candidates by looking thru our
              Member Search.
            </p>
            <div className="btnGroup">
              <Link className="btn btnMemberSearch" to="/company/member">
                <Icon src={membersIcon} />
                Search Members
              </Link>
            </div>
          </div>
        </div>
      </div>
    </CreateJobSucceedStyle>
  );
}

CreateJobSucceed.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  null,
  mapDispatchToProps,
);

export default compose(withConnect)(CreateJobSucceed);
