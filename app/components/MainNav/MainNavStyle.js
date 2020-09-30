import styled from 'styled-components';

const MainNavStyle = styled.div`
  width: 300px;
  min-height: 100vh;
  box-shadow: 4px 0px 16px rgba(0, 0, 0, 0.04);
  padding: 18px 0;
  .mainLogo {
    padding: 30px;
  }

  .postJobBox {
    padding: 10px 30px 50px;
    a {
      display: flex;
      align-items: center;
      justify-content: center;
      max-width: 140px;
      padding: 5px 28px;
      font-size: 12.5263px;
      color: #2b75cc;
      border: 2px solid #2b75cc;
      border-radius: 50px;
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
      width: 100%;
      font-weight: 600;
      font-size: 16px;
      line-height: 22px;
      color: #333333;
      padding: 19px 30px;
      transition: all 0.3s ease 0s;
      margin: 0 0 20px;
      &:hover,
      &:active {
        background: #f5f9fc;
        color: #2b75cc;
      }
      img {
        margin: 0 10px 0 0;
      }
    }
  }
`;

export default MainNavStyle;