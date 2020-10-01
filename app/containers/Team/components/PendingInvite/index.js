import React from 'react';
import PendingInviteStyle from './PendingInviteStyle';
const PendingInvite = () => (
  <PendingInviteStyle>
    <h3 className="boxTitle">Pending Invites (3)</h3>
    <ul className="pendingList">
      <li>
        <div className="info">
          <h4 className="name">Johnny Rockets</h4>
          <p className="email">j.rockets@spotify.com</p>
        </div>
        <div className="behavior">
          <button type="button" className="btn">
            Cancel
          </button>
          <button type="button" className="btn btn-primary btnResend">
            Resend
          </button>
        </div>
      </li>
      <li>
        <div className="info">
          <h4 className="name">Dale Washington</h4>
          <p className="email">d.washington@spotify.com</p>
        </div>
        <div className="behavior">
          <button type="button" className="btn btnCancel">
            Cancel
          </button>
          <button type="button" className="btn btn-primary btnResend">
            Resend
          </button>
        </div>
      </li>
      <li>
        <div className="info">
          <h4 className="name">Ernie Jackson</h4>
          <p className="email">e.jackson@spotify.com</p>
        </div>
        <div className="behavior">
          <button type="button" className="btn btnCancel">
            Cancel
          </button>
          <button type="button" className="btn btn-primary btnResend">
            Resend
          </button>
        </div>
      </li>
    </ul>
  </PendingInviteStyle>
);

export default PendingInvite;
