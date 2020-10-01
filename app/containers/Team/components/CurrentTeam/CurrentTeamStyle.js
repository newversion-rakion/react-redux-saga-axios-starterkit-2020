import styled from 'styled-components';
import * as CSS from 'utils/styleSheetHelpers';

const CurrentTeamStyle = styled.div`
  width: 100%;
  margin: 0 0 28px;
  .boxTitle {
    margin: 0 0 17.5px;
    font-size: 14px;
    line-height: 19px;
    color: #0e142c;
    font-family: ${CSS.FONT700};
  }

  .userList {
    li {
      width: 50%;
      float: left;
      display: flex;
      flex-wrap: nowrap;
      align-items: center;
      padding: 7.5px 0;
      &:nth-child(odd) {
        clear: left;
      }
    }
    .thumb {
      width: 50px;
      height: 50px;
      overflow: hidden;
      border-radius: 50%;
      display: flex;
      align-items: center;
      border: 5px solid #ffffff;
      justify-content: center;
      box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.12),
        inset 0px 0px 8px rgba(0, 0, 0, 0.24);
      img {
        width: 100%;
      }
    }
    .info {
      width: calc(100% - 50px);
      padding: 0 15px 0 10px;
    }
    .name {
      font-size: 14px;
      line-height: 19px;
      color: #0e142c;
      font-family: ${CSS.FONT600};
      margin: 0;
    }
    .role {
      font-size: 14px;
      line-height: 19px;
      font-family: ${CSS.FONT500};
      color: #8f9299;
      margin: 0;
    }
  }
`;

export default CurrentTeamStyle;
