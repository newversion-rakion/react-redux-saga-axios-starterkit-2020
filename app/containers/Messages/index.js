/**
 *
 * Messages
 *
 */

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import Loading from 'components/Loading';
import { getMessages } from './actions';
import makeSelectMessages from './selectors';
import reducer from './reducer';
import saga from './saga';

export function Messages(props) {
  useInjectReducer({ key: 'messages', reducer });
  useInjectSaga({ key: 'messages', saga });
  useEffect(() => {
    props.getMessages();
  }, []);
  return (
    <div>
      <Helmet>
        <title>Messages</title>
        <meta name="description" content="Description of Messages" />
      </Helmet>
      <Loading loading={props.messages.loading} />
    </div>
  );
}

Messages.propTypes = {
  messages: PropTypes.object,
  getMessages: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  messages: makeSelectMessages(),
});

function mapDispatchToProps(dispatch) {
  return {
    getMessages: () => dispatch(getMessages()),
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(Messages);
