import styled from 'styled-components';
import * as CSS from 'utils/styleSheetHelpers';

const UserBoxStyle = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  padding: 30px 0 35px;
  .btnToSettings {
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    font-family: ${CSS.FONT700};
    font-size: 24px;
    line-height: 33px;
    color: #000000;
  }
  .userAvt {
    margin: 0 20px 0 0;
    position: relative;
    .inner {
      width: 72px;
      height: 72px;
      border-radius: 50%;
      border: 6px solid #ffffff;
      box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.12),
        inset 0px 0px 18px rgba(0, 0, 0, 0.12);
      overflow: hidden;
    }
    .smallIcon {
      position: absolute;
      z-index: 2;
      display: flex;
      justify-content: center;
      align-items: center;
      bottom: 0;
      right: 0;
      background: #eff3ff;
      border: 2px solid #ffffff;
      box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.24);
      border-radius: 50%;
      width: 24px;
      height: 24px;
      overflow: hidden;
      border-radius: 50%;
    }
  }
  .btnPostNewJob {
    display: flex;
    align-items: center;
    font-size: 14px;
    line-height: 19px;
    font-family: ${CSS.FONT700};
    color: #ffffff;
    background: #2b75cc;
    border-radius: 50px;
    padding: 13px 21px;
    img {
      margin: 0 8px 0 0;
    }
  }
`;

export default UserBoxStyle;
