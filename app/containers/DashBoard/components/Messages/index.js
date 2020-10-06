import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as _ from 'lodash';
import newMessageNotifyIcon from 'images/icons/dashboard/newMessageNotify.svg';
import teamMemberThumb from 'images/draft/teamMemberThumb.jpg';
import emptyMessageIcon from 'images/icons/dashboard/emptyMessage.svg';
import MessagesStyle from './MessagesStyle';
const Messages = ({ messages, unreadMessagesCount }) => (
  <MessagesStyle>
    <div className="messagesBoxContent">
      <div className="upperBox">
        <h3 className="boxTitle">Messages</h3>
        {messages > 0 && <Link to="/company/messages">View All</Link>}
      </div>
      {messages.length === 0 && (
        <div className="messageEmptyBox">
          <div className="messageEmptyBoxItem">
            <div>
              <img src={emptyMessageIcon} alt="" />
              <span>You have no recent messages.</span>
            </div>
          </div>
        </div>
      )}
      {messages.length > 0 && (
        <>
          <Link className="btnGetNewMessage" to="/company/messages">
            <img src={newMessageNotifyIcon} alt="" />
            {unreadMessagesCount} New Messages
          </Link>
          <ul className="messageList">
            {messages &&
              messages.map(item => (
                <li key={item.id}>
                  <div className="thumb">
                    <img src={item.avatar} alt="" />
                  </div>
                  <div className="content">
                    <h4>{item.user_name}</h4>
                    <div className="messageContent">
                      <p>{item.content_message}</p>
                      <span className="time">53 min</span>
                    </div>
                    {item.professions.map((professionItem, i) => (
                      // eslint-disable-next-line react/no-array-index-key
                      <Link key={i} className="role" to="/">
                        {professionItem}
                      </Link>
                    ))}
                  </div>
                </li>
              ))}
          </ul>
        </>
      )}
    </div>
  </MessagesStyle>
);

Messages.propTypes = {
  messages: PropTypes.array,
  unreadMessagesCount: PropTypes.number,
};

export default Messages;
