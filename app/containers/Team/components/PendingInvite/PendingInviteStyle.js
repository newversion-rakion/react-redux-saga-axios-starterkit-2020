import styled from 'styled-components';
import * as CSS from 'utils/styleSheetHelpers';

const PendingInviteStyle = styled.div`
  width: 100%;
  .boxTitle {
    margin: 0 0 20px;
    font-size: 14px;
    line-height: 19px;
    color: #0e142c;
    font-family: ${CSS.FONT700};
  }

  .pendingList {
    li {
      display: flex;
      flex-wrap: nowrap;
      align-items: center;
      width: 100%;
      justify-content: space-between;
      padding: 15px 0;
    }
  }

  .info {
    padding: 0 15px 0 0;
  }

  .name {
    margin: 0 0 3px;
    font-size: 14px;
    line-height: 19px;
    font-family: ${CSS.FONT600};
    color: #8f9299;
  }

  .email {
    font-size: 14px;
    line-height: 19px;
    font-family: ${CSS.FONT500};
    color: #8f9299;
    margin: 0;
  }

  .btn {
    font-size: 12px;
    line-height: 16px;
    font-family: ${CSS.FONT600};
    border-radius: 50px;
    border: 2px solid #8f9299;
    color: #8f9299;
    min-width: 92px;
    text-align: center;
    padding: 7px 5px;
    &.btnResend {
      border-color: #2b75cc;
      color: #ffffff;
      background: #2b75cc;
      margin: 0 0 0 10px;
      transition: all 0.3s ease 0s;
      &:hover {
        background: #225ea3;
      }
    }
  }
`;

export default PendingInviteStyle;
