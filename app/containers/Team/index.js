/**
 *
 * Team
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import companyThumbForTeamPage from 'images/draft/companyThumbForTeamPage.png';
import MemberInvitationForm from './components/MemberInvitationForm';
import CurrentTeam from './components/CurrentTeam';
import PendingInvite from './components/PendingInvite';
import makeSelectTeam from './selectors';
import reducer from './reducer';
import saga from './saga';
import TeamStyle from './TeamStyle';
export function Team() {
  useInjectReducer({ key: 'team', reducer });
  useInjectSaga({ key: 'team', saga });

  return (
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

        <MemberInvitationForm />
        <CurrentTeam />
        <PendingInvite />
      </div>
    </TeamStyle>
  );
}

const mapStateToProps = createStructuredSelector({
  team: makeSelectTeam(),
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

export default compose(withConnect)(Team);
