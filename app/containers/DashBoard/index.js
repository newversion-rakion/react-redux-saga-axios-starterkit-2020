import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import Loading from 'components/Loading';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectDashBoard from './selectors';
import reducer from './reducer';
import { getJobs, getMessages } from './actions';
import saga from './saga';
import DashBoardStyle from './DashBoardStyle';
import Jobs from './components/Jobs';
import UserBox from './components/UserBox';
import Messages from './components/Messages';
import Shortcuts from './components/Shortcuts';
export function DashBoard(props) {
  useInjectReducer({ key: 'dashBoard', reducer });
  useInjectSaga({ key: 'dashBoard', saga });

  useEffect(() => {
    props.getJobs();
    props.getMessages();
  }, []);
  return (
    <div>
      <Helmet>
        <title>DashBoard</title>
        <meta name="description" content="Description of DashBoard" />
      </Helmet>
      <Loading loading={props.dashBoard.loading} />
      <DashBoardStyle>
        <div className="pageContent">
          <UserBox />
          <div className="mainBox">
            <div className="mainBoxRow">
              <Jobs jobs={props.dashBoard.jobs} />
              <Messages messages={props.dashBoard.messages} />
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

DashBoard.propTypes = {
  dashBoard: PropTypes.object,
  messages: PropTypes.array,
  jobs: PropTypes.array,
  getJobs: PropTypes.func,
  getMessages: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  dashBoard: makeSelectDashBoard(),
});

function mapDispatchToProps(dispatch) {
  return {
    getJobs: () => dispatch(getJobs()),
    getMessages: () => dispatch(getMessages()),
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(DashBoard);
