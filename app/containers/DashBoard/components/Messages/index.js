import React from 'react';
import { Link } from 'react-router-dom';
import newMessageNotifyIcon from 'images/icons/dashboard/newMessageNotify.svg';
import teamMemberThumb from 'images/draft/teamMemberThumb.jpg';
import MessagesStyle from './MessagesStyle';

const Messages = () => {
  return (
    <MessagesStyle>
      <Link className="btnGetNewMessage" to="/">
        <img src={newMessageNotifyIcon} alt="" />6 New Messages
      </Link>

      <ul className="messageList">
        <li>
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
        <li>
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
        <li>
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
      </ul>
    </MessagesStyle>
  );
};

export default Messages;
