import styled from 'styled-components';
import * as CSS from 'utils/styleSheetHelpers';

const MessagesStyle = styled.div`
  padding: 0 30px;
  width: 420px;
  .messagesBoxContent {
    width: 100%;
    margin: 0 0 45px;
  }
  .btnGetNewMessage {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 0 20px;
    font-size: 14px;
    line-height: 19px;
    color: #2b75cc;
    font-family: ${CSS.FONT700};
    background: rgb(43 117 204 / 0.1);
    border-radius: 8px;
    padding: 9px 10px;
    img {
      margin: 0 8px 0 0;
    }
  }
  .messageList {
    li {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      padding: 14px 15px;
      box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.12);
      border-radius: 8px;
      cursor: pointer;
      transition: all 0.3s ease 0s;
      &:hover {
        box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.3);
      }
      & ~ li {
        margin: 15px 0 0;
      }
    }
    .thumb {
      width: 64px;
      height: 64px;
      border-radius: 50%;
      overflow: hidden;
      box-shadow: 0px 0px 18.2857px rgba(0, 0, 0, 0.12);
    }
    .content {
      width: calc(100% - 64px);
      padding: 0 0 0 15px;
    }
    h4 {
      margin: 0 0 5px;
      font-size: 14px;
      line-height: 19px;
      font-family: ${CSS.FONT700};
      color: #0e142c;
    }
    .messageContent {
      font-size: 14px;
      line-height: 19px;
      font-family: ${CSS.FONT600};
      color: #8f9299;
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      margin: 0 0 5px;
      p {
        margin: 0;
        width: calc(100% - 90px);
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
      }
    }
    .time {
      width: 90px;
      display: flex;
      align-items: center;
      padding: 0 0 0 5px;
      &:before {
        content: '';
        display: block;
        width: 3px;
        height: 3px;
        border-radius: 50%;
        background: #8f9299;
        margin: 0 7px 0 0;
      }
    }
    .role {
      font-size: 10px;
      line-height: 14px;
      color: #2b75cc;
      font-family: ${CSS.FONT700};
      background: #f5f9fc;
      padding: 4px 12px;
      border-radius: 30px;
      ~ .role {
        margin: 0 0 5px 10px;
      }
    }
  }
  .messageEmptyBox {
    width: 100%;
    margin: 0 0 45px;
  }
  .messageEmptyBoxItem {
    height: 384px;
    width: 100%;
    background: #f5f9fc;
    border-radius: 8px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    padding: 0 10px;
    div {
      text-align: center;
    }
    span {
      display: block;
      font-size: 20px;
      line-height: 27px;
      color: #b8c8d9;
      width: 100%;
      margin: 23px 0 0;
      font-family: ${CSS.FONT700};
    }
  }
`;

export default MessagesStyle;
