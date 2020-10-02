/**
 *
 * Team
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import PropTypes from 'prop-types';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import companyThumbForTeamPage from 'images/draft/companyThumbForTeamPage.png';
import Loading from 'components/Loading';
import MemberInvitationForm from './components/MemberInvitationForm';
import CurrentTeam from './components/CurrentTeam';
import PendingInvite from './components/PendingInvite';
import makeSelectTeam from './selectors';
import { invite } from './actions';
import reducer from './reducer';
import saga from './saga';
import TeamStyle from './TeamStyle';
export function Team(props) {
  useInjectReducer({ key: 'team', reducer });
  useInjectSaga({ key: 'team', saga });

  return (
    <>
      <Loading loading={props.team.loading} />
      <TeamStyle>
        <div className="pageContent">
          <div className="item">
            <div className="itemThumb">
              <img src={companyThumbForTeamPage} alt="" />
            </div>
            <h1>Build your team</h1>
            <p className="boxDescription">
              Add members to your team to make it easier to share, evaluate, and
              engage candidates.
            </p>
          </div>

          <MemberInvitationForm onSubmitForm={props.onSubmitForm} />
          <CurrentTeam />
          <PendingInvite />
        </div>
      </TeamStyle>
    </>
  );
}

Team.propTypes = {
  onSubmitForm: PropTypes.func,
  team: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  team: makeSelectTeam(),
});

function mapDispatchToProps(dispatch) {
  return {
    onSubmitForm: data => {
      if (data !== undefined && data.preventDefault) data.preventDefault();
      dispatch(invite(data));
    },
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(Team);
