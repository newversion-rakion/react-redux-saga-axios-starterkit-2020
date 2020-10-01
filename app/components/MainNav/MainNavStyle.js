import styled from 'styled-components';
import * as CSS from 'utils/styleSheetHelpers';

const MainNavStyle = styled.div`
  width: 300px;
  min-height: 100vh;
  box-shadow: 4px 0px 16px rgba(0, 0, 0, 0.04);
  padding: 18px 0;
  .mainLogo {
    padding: 30px;
  }

  .companyBox {
    padding: 10px 30px 0;
    a {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      font-size: 16px;
      font-family: ${CSS.FONT700};
      color: #000000;
    }
    span {
      padding: 0 10px 0 0;
      img {
        margin: 0 3px 0 0;
      }
    }
  }

  .postJobBox {
    padding: 10px 30px 50px;
    a {
      display: flex;
      align-items: center;
      justify-content: center;
      max-width: 140px;
      padding: 5px 15px;
      font-size: 12.5263px;
      color: #2b75cc;
      border: 2px solid #2b75cc;
      border-radius: 50px;
      font-family: ${CSS.FONT700};
      img {
        margin: 0 5px 0 0;
      }
    }
  }

  .mainNavGroup {
    position: relative;
    padding: 0 0 10px;
    &:before {
      content: '';
      display: block;
      background: #333333;
      opacity: 0.3;
      width: 86px;
      height: 1px;
      margin: 0 0 30px 30px;
    }
    a {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      font-family: ${CSS.FONT600};
      font-size: 16px;
      line-height: 22px;
      color: #333333;
      padding: 19px 30px;
      transition: all 0.3s ease 0s;
      margin: 0 0 20px;
      &.isActive,
      &:hover,
      &:active {
        background: #f5f9fc;
        color: #2b75cc;
      }
    }
    .behaviorBox {
      text-align: right;
    }
    .mainNavText {
      padding: 0 10px 0 0;
      img {
        margin: 0 10px 0 0;
      }
    }
    .mainNavStatus {
      font-size: 12px;
      font-family: ${CSS.FONT700};
      color: #2b75cc;
    }
  }
`;

export default MainNavStyle;
