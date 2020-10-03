import React from 'react';
import PropTypes from 'prop-types';
import PendingInviteStyle from './PendingInviteStyle';

const PendingInvite = ({ pendingInviteList, cancelInvite, resendInvite }) => (
  <PendingInviteStyle>
    <h3 className="boxTitle">Pending Invites ({pendingInviteList.length})</h3>
    <ul className="pendingList">
      {pendingInviteList &&
        pendingInviteList.map(user => (
          <li key={user.id}>
            <div className="info">
              <h4 className="name">{user.name}</h4>
              <p className="email">{user.email}</p>
            </div>
            <div className="behavior">
              <button
                type="button"
                className="btn"
                onClick={() => {
                  cancelInvite(user.id);
                }}
              >
                Cancel
              </button>
              <button
                type="button"
                className="btn btn-primary btnResend"
                onClick={() => {
                  resendInvite(user.id);
                }}
              >
                Resend
              </button>
            </div>
          </li>
        ))}
    </ul>
  </PendingInviteStyle>
);

PendingInvite.propTypes = {
  pendingInviteList: PropTypes.array,
  cancelInvite: PropTypes.func,
  resendInvite: PropTypes.func,
};

export default PendingInvite;
