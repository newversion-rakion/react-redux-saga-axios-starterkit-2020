import React from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { Link } from 'react-router-dom';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectDashBoard from './selectors';
import reducer from './reducer';
import saga from './saga';
import DashBoardStyle from './DashBoardStyle';
import JobItem from './components/JobItem';
import UserBox from './components/UserBox';
import Messages from './components/Messages';
import Shortcuts from './components/Shortcuts';
export function DashBoard() {
  useInjectReducer({ key: 'dashBoard', reducer });
  useInjectSaga({ key: 'dashBoard', saga });

  return (
    <div>
      <Helmet>
        <title>DashBoard</title>
        <meta name="description" content="Description of DashBoard" />
      </Helmet>
      <DashBoardStyle>
        <div className="pageContent">
          <UserBox />
          <div className="mainBox">
            <div className="mainBoxRow">
              <div className="jobListingsBox">
                <div className="upperBox">
                  <h3 className="boxTitle">Job Listings</h3>
                  <Link to="company/job">View All</Link>
                </div>
                <div className="jobListingsBoxRow">
                  <div className="jobListingsBoxCol">
                    <JobItem />
                  </div>
                  <div className="jobListingsBoxCol">
                    <JobItem />
                  </div>
                </div>
              </div>
              <div className="messagesBox">
                <div className="upperBox">
                  <h3 className="boxTitle">Messages</h3>
                  <Link to="company/messages">View All</Link>
                </div>
                <Messages />
              </div>
            </div>
          </div>
        </div>
        <Shortcuts />
        <p className="lastlog">
          Last log in was <strong>June 23, 2020.</strong>
        </p>
      </DashBoardStyle>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  dashBoard: makeSelectDashBoard(),
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

export default compose(withConnect)(DashBoard);
