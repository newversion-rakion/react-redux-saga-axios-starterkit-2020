import styled from 'styled-components';
import * as CSS from 'utils/styleSheetHelpers';

const PreviewBoxStyle = styled.div`
  width: 100%;
  .previewBox {
    padding: 0 0 5px;
  }
  .previewBoxContent {
    width: 100%;
    overflow: hidden;
    position: relative;
    .iphone {
      position: relative;
      z-index: 1;
      width: 100%;
      pointer-events: none;
    }
    .previewBoxFormData {
      padding: 15px 18px 15px;
      height: 100%;
      z-index: 0;
      position: absolute;
      top: 0;
    }
  }
  .headerButtons {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 0 25px;
    .btn {
      font-size: 14px;
      line-height: 19px;
      font-family: ${CSS.FONT700};
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 11px 22px;
      border-radius: 50px;
      border: 2px solid #ccd2da;
      min-width: 100px;
      transition: all 0.3s ease 0s;
      & ~ .btn {
        margin: 0 0 0 8px;
      }
      object {
        margin: 0 8px 0 0;
      }
    }
    .btnCancel {
      color: #686d86;
      opacity: 0.5;
    }
    .btnSubmit {
      color: #ffffff;
      background: #2b75cc;
      border-color: #2b75cc;
      &:hover {
        background: #225ea3;
      }
    }
  }
  .footerButtons {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    padding: 7px 0 0;
    .btn {
      font-size: 14px;
      line-height: 19px;
      font-family: ${CSS.FONT700};
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 11px 22px;
      border-radius: 50px;
      border: 2px solid #ccd2da;
      min-width: 170px;
      transition: all 0.3s ease 0s;
      margin: 20px 0 0;
      object {
        margin: 0 8px 0 0;
      }
    }
    .btnToggleJobHireStage {
      background: #28bf89;
      border-color: #28bf89;
      color: #ffffff;
    }
    .btnDeleteJob {
      color: #686d86;
      opacity: 0.5;
      padding: 6px 22px;
    }
  }
  .previewThumb {
    position: relative;
    min-height: 100px;
    .iphoneBack {
      box-shadow: 0px 0px 5.98773px rgba(0, 0, 0, 0.16);
      width: 24px;
      height: 24px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #ffffff;
      position: absolute;
      top: 17px;
      left: 15px;
      z-index: 2;
      object {
        position: relative;
        left: -1px;
      }
    }
    &:after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      background: linear-gradient(
        360deg,
        #ffffff -0.09%,
        rgba(255, 255, 255, 0) 57.5%
      );
      height: 80%;
    }
  }
  .previewContent {
    padding: 5px 15px;
  }
  .previewTitle {
    font-size: 15px;
    line-height: 23px;
    color: #0e142c;
    margin: 0;
    font-family: ${CSS.FONT700};
  }
  .previewInfo {
    width: 100%;
    display: flex;
    align-items: center;
    padding: 7px 0 11px;
    .previewInfoItem {
      padding: 2px 10px;
      font-size: 6.98568px;
      line-height: 10px;
      font-family: ${CSS.FONT700};
      border-radius: 20px;
      display: flex;
      align-items: center;
      & + .previewInfoItem {
        margin: 0 0 0 6px;
      }
    }
    .previewProfession {
      color: #2b75cc;
      background: #f5f9fc;
    }
    .previewLocation {
      color: #28bf89;
      background: #f5fcf9;
      object {
        margin: 0 3px 0 0;
      }
    }
  }
  .previewDescription {
    width: 100%;
    font-size: 9px;
    line-height: 14px;
    color: #0e142c;
    opacity: 0.75;
    margin: 0 0 16px;
    font-family: ${CSS.FONT600};
  }
  .previewAuthorBox {
    h5 {
      font-size: 7.43625px;
      line-height: 10px;
      color: #0e142c;
      font-family: ${CSS.FONT700};
      margin: 0 0 6px;
    }
    .companyBox {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      color: #0e142c;
      font-size: 8.98159px;
      line-height: 12px;
      font-family: ${CSS.FONT700};
    }
    .companyThumb {
      width: 32px;
      height: 32px;
      overflow: hidden;
      border-radius: 50%;
      border: 2px solid #ffffff;
      margin: 0 8.5px 0 0;
      box-shadow: 0px 0px 5.33333px rgba(0, 0, 0, 0.12),
        inset 0px 0px 8px rgba(0, 0, 0, 0.12);
    }
  }
  .scrollableBox {
    padding: 0 0 10px;
    overflow-y: auto;
    height: calc(100% - 135px);
    &::-webkit-scrollbar {
      width: 1px;
    }
  }
  .previewBoxFooter {
    height: 135px;
    .btnGroup {
      padding: 0 10px;
    }
    .btn {
      font-size: 7.43625px;
      line-height: 10px;
      color: #ffffff;
      font-family: ${CSS.FONT700};
      background: #2b75cc;
      border: 1px solid #2b75cc;
      border-radius: 50px;
      display: block;
      width: 100%;
      padding: 8px 10px;
      & + .btn {
        margin: 10px 0 0;
      }
      &.btnShare {
        border-color: #0e142c;
        background: none;
        color: #0e142c;
        opacity: 0.7;
      }
    }
  }
  .bottomBar {
    background: red;
    width: 100%;
    height: 60px;
    margin: 8.5px 0 0;
  }
`;

export default PreviewBoxStyle;
