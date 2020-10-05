import { createGlobalStyle } from 'styled-components';
import * as CSS from 'utils/styleSheetHelpers';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
    line-height: 1.5;
  }

  body {
    font-family: 'Avenir Next', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #app {
    min-height: 100%;
    min-width: 100%;
  }

  a {
    &:hover {
      text-decoration: none;
    }
  }

  a, button {
    &:focus, &:active {
      outline: 0;
    }
  }

  img {
    max-width: 100%;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .formError {
    color: red;
    display: block;
    text-align: left;
    font-size: 12px;
    padding: 10px 0;
  }

  // Custom form
  .editCompanyFormWrapper {
    .modal-dialog {
      max-width: 600px;
    }
    .modal-content {
      box-shadow: 0px 3.04124px 25.8505px rgba(0, 0, 0, 0.1);
      border-radius: 15.2062px;
      border: 1.52062px solid rgba(151, 151, 151, 0.2);
    }
  }
  .editCompanyForm {
    position: relative;
    padding: 30px 60px;
    .btnCloseEditCompanyModal {
      position: absolute;
      top: 38px;
      left: 41px;
      background: none;
      border: 0;
      padding: 0;
      &:hover {
        object {
          filter: ${CSS.FILTER_BLUE};
        }
      }
      object {
        width: 20px;
      }
    }
    .formTitle {
      font-size: 28px;
      line-height: 38px;
      color: #000000;
      margin: 0 0 60px;
      text-align: center;
      font-family: ${CSS.FONT700};
    }
    .formThumb {
      margin: 0 auto 37px;
      position: relative;
      width: 72px;
      .formThumbInner {
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
        &:hover {
          object {
            filter: ${CSS.FILTER_BLACK};
          }
        }
      }
    }
    .form-group {
      margin: 0 0 64px;
    }
    .formLabel {
      font-size: 16px;
      color: #000000;
      opacity: 0.7;
      display: block;
      margin: 0 0 13px;
      font-family: ${CSS.FONT600};
    }
    .form-control {
      border: 2px solid rgba(143, 146, 153, 0.5);
      box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.04);
      border-radius: 8px;
      height: 73px;
      font-size: 18px;
      color: #0E142C;
      padding: 5px 24px;
      font-family: ${CSS.FONT600};
    }
    .btnWrapper {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      button {
        background: #2B75CC;
        border: 0;
        padding: 19px;
        color: #ffffff;
        font-size: 18px;
        line-height: 25px;
        font-family: ${CSS.FONT700};
        border-radius: 50px;
        min-width: 264px;
      }
    }
  }
`;

export default GlobalStyle;
