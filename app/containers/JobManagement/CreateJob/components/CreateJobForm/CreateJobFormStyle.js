import styled from 'styled-components';
import * as CSS from 'utils/styleSheetHelpers';

const CreateJobFormStyle = styled.div`
  width: 100%;
  box-shadow: 0px 0px 41px rgba(0, 0, 0, 0.08);
  border-radius: 4px;
  overflow: hidden;
  .jobForm {
    position: relative;
    overflow: hidden;
  }
  .stepItemContent {
    padding: 25px 50px;
  }
  .stepTitle {
    margin: 0 0 11px;
    font-size: 18px;
    line-height: 24px;
    color: #0e142c;
    font-family: ${CSS.FONT700};
    display: flex;
    align-items: center;
    span {
      width: 32px;
      height: 32px;
      line-height: 28px;
      border: 2px solid #2b75cc;
      text-align: center;
      font-size: 16px;
      color: #2b75cc;
      border-radius: 50%;
      margin: 0 15px 0 0;
    }
  }
  .stepDescription {
    margin: 0 0 18px;
    font-size: 16px;
    color: #686d86;
    line-height: 29px;
  }
  .stepFooter {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    padding: 8px 0 5px;
  }
  .stepFooterLeft {
    font-size: 14px;
    line-height: 19px;
    color: #686d86;
    font-family: ${CSS.FONT500};
    strong {
      font-family: ${CSS.FONT600};
    }
  }
  .stepFooterRight {
    .btn {
      font-size: 12px;
      line-height: 16px;
      border-radius: 50px;
      font-family: ${CSS.FONT700};
      border: 2px solid #ccd2da;
      min-width: 100px;
      padding: 10px;
      & ~ .btn {
        margin-left: 10px;
      }
    }
    .btnCancel {
      color: #ccd2da;
    }
    .btnNextStep {
      background: #2b75cc;
      color: #ffffff;
      border: 2px solid #2b75cc;
      &:hover {
        transition: all 0.3s ease 0s;
        background: #225ea3;
        border-color: #225ea3;
      }
    }
  }
  .stepItem {
    width: 100%;
    transition: all 0.3s ease 0s;
    opacity: 0;
    visibility: hidden;
    position: absolute;
    &.isActiveStep {
      opacity: 1;
      visibility: visible;
      position: static;
    }
  }
  .previewBox {
    padding: 0 0 5px;
  }
  .previewBoxContent {
    position: relative;
    width: 287px;
    height: 415px;
    overflow: hidden;
    margin: 0 auto;
    &:after {
      content: '';
      display: block;
      width: 100%;
      height: 200px;
      position: absolute;
      bottom: 0;
      left: 0;
      z-index: 2;
      background-image: linear-gradient(rgba(255, 255, 255, 0), #ffffff);
    }
    .iphone {
      position: relative;
      z-index: 1;
      width: 100%;
      pointer-events: none;
    }
    .previewBoxFormData {
      padding: 15px 18px 15px;
      height: 100%;
      width: 100%;
      z-index: 0;
      position: absolute;
      top: 0;
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
    height: 100%;
    &::-webkit-scrollbar {
      width: 1px;
    }
  }
`;

export default CreateJobFormStyle;
