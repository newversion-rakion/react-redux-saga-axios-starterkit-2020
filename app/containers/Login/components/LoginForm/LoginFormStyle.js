/* eslint-disable prettier/prettier */
import styled from 'styled-components';

const LoginFormStyle = styled.div`
  border-radius: 8px;
  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.08);
  padding: 15px;
  margin: 50px 0;
  .form-group {
    margin: 0 0 12px;
  }
  .form-control {
    width: 100%;
    height: 52px;
    padding: 5px 16px;
    font-weight: 600;
    color: #0e142c;
    &::placeholder {
      font-size: 16px;
      color: #8f9299;
      font-weight: bold;
    }
  }
  .btnSubmit {
    width: 100%;
    display: block;
    font-size: 16px;
    font-weight: bold;
    color: #ffffff;
    border-radius: 66px;
    text-align: center;
    padding: 11px 10px;
    background: #2b75cc;
  }

  .btnForgotPassword {
    font-size: 12px;
    line-height: 19px;
    text-align: center;
    font-weight: bold;
    color: #2b75cc;
    padding: 15px 0 20px;
    display: block;
  }

  .createNewAccountBox {
    border-top: 1px solid #dadde1;
    padding: 25px 0 10px;
    text-align: center;
    a {
      font-weight: bold;
      font-size: 14px;
      text-align: center;
      color: #2B75CC;
      border: 2px solid #2B75CC;
      border-radius: 46px;
      padding: 12px 10px;
      min-width: 200px;
      display: inline-block;
    }
  }

  .formError {
    color: red;
    display: block;
    text-align: left;
    font-size: 12px;
    padding: 10px 0;
  }
`;

export default LoginFormStyle;
