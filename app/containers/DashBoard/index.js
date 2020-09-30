import React from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectDashBoard from './selectors';
import reducer from './reducer';
import saga from './saga';
import DashBoardStyle from './DashBoardStyle';
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
        <div className="pageContent">Dashboard content</div>
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
