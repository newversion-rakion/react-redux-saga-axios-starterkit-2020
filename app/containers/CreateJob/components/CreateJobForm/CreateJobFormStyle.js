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
`;

export default CreateJobFormStyle;
