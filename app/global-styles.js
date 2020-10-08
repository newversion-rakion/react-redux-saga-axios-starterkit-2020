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

  // Form
  .formError {
    color: red;
    display: block;
    text-align: left;
    font-size: 12px;
    padding: 10px 0;
  }

  // Job form
  .jobForm {
    .formLabel {
      font-size: 14px;
      line-height: 20px;
      color: #2B75CC;
      font-family: ${CSS.FONT600};
      display: block;
      margin: 0 0 10px;
      i {
        font-size: 12px;
        color: #8D91A5;
        font-style: normal;
        margin: 0 0 0 6px;
      }
    }
    .form-control {
      height: 48px;
      color: #0E142C;
      font-size: 14px;
      padding: 10px 15px;
      font-family: ${CSS.FONT600};
      &::placeholder {
        font-family: ${CSS.FONT500};
        color: #8F9299;
      }
    }
    .wrapUploadField {
      display: flex;
      align-items: center;
      .uploadFileThumb {
        min-width: 120px;
        position: relative;
        cursor: pointer;
        border: 2px solid #ccd2da;
        border-radius: 50px;
        display: flex;
        align-items: center;
        font-size: 12px;
        line-height: 16px;
        color: #ccd2da;
        font-family: ${CSS.FONT700};
        padding: 10px 27px;
        margin: 0 10px 0 0;
        object {
          opacity: 0.6;
          max-width: 14px;
          margin: 0 5px 0 0;
        }
      }
      .uploadFileName {
        font-family: ${CSS.FONT600};
        font-size: 14px;
        line-height: 19px;
        color: #0E142C;
      }
      input[type="file"] {
        position: absolute;
        z-index: -1;
        top: 0;
        left: 0;
        opacity: 0;
        width: 100%;
        height: 100%;
      }
    }
    .wrapSelectionField {
      position: relative;
      &:after {
        content: '';
        position: absolute;
        top: 50%;
        margin-top: -3px;
        right: 20px;
        width: 0;
        height: 0;
        pointer-events: none;
        border-left: 6px solid transparent;
        border-right: 6px solid transparent;
        border-top: 6px solid #8F9299;
      }
    }
    textarea {
      &.form-control {
        height: 96px;
      }
    }
  }

  // Edit Company Form
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
