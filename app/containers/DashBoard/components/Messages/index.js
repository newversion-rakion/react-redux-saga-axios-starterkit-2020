import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as _ from 'lodash';
import newMessageNotifyIcon from 'images/icons/dashboard/newMessageNotify.svg';
import teamMemberThumb from 'images/draft/teamMemberThumb.jpg';
import MessagesStyle from './MessagesStyle';
const Messages = ({ messages }) => {
  const fixedMessage = _.slice(messages, 0, 3);
  return (
    <MessagesStyle>
      <div className="messagesBoxContent">
        <div className="upperBox">
          <h3 className="boxTitle">Messages</h3>
          <Link to="/company/messages">View All</Link>
        </div>
        <Link className="btnGetNewMessage" to="/">
          <img src={newMessageNotifyIcon} alt="" />6 New Messages
        </Link>

        <ul className="messageList">
          {fixedMessage &&
            fixedMessage.map(item => (
              <li key={item.id}>
                <div className="thumb">
                  <img src={teamMemberThumb} alt="" />
                </div>
                <div className="content">
                  <h4>Boris Chen</h4>
                  <div className="messageContent">
                    <p>That’s exactly what I was looking to st</p>
                    <span className="time">53 min</span>
                  </div>
                  <Link className="role" to="/">
                    Graphic Designer
                  </Link>
                </div>
              </li>
            ))}
        </ul>
      </div>
    </MessagesStyle>
  );
};

Messages.propTypes = {
  messages: PropTypes.array,
};

export default Messages;
