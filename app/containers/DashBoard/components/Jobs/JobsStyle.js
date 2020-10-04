import styled from 'styled-components';
import * as CSS from 'utils/styleSheetHelpers';

const JobsStyle = styled.div`
  padding: 0 30px;
  width: calc(100% - 420px);
  .jobBoxContent {
    width: 100%;
    margin: 0 0 45px;
  }
  .item {
    border-radius: 8px;
    overflow: hidden;
    margin: 0 0 24px;
    box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.12);
    transition: all 0.3s ease 0s;
    &:hover {
      box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.3);
    }
  }
  .thumb {
    img {
      width: 100%;
    }
  }
  .itemContent {
    padding: 8px 15px 15px;
  }
  .jobName {
    margin: 0 0 4px;
    a {
      font-size: 14px;
      line-height: 19px;
      color: #0e142c;
      font-family: ${CSS.FONT700};
    }
  }
  .time {
    padding: 0 0 0 15px;
    position: relative;
    &:before {
      content: '';
      display: block;
      position: absolute;
      left: 6px;
      top: 6px;
      width: 3px;
      height: 3px;
      border-radius: 50%;
      background: #8f9299;
      margin: 0 7px 0 0;
    }
  }
  .createdDate {
    font-size: 12px;
    line-height: 16px;
    color: #8f9299;
    font-family: ${CSS.FONT600};
    margin: 0 0 13px;
    strong {
      font-family: ${CSS.FONT700};
    }
  }
  .jobInfo {
    font-size: 12px;
    line-height: 16px;
    color: #333333;
    margin: 0 0 20px;
    font-family: ${CSS.FONT600};
    strong {
      font-family: ${CSS.FONT700};
    }
  }
  .applicants {
    display: flex;
    align-items: center;
    font-size: 12px;
    line-height: 15px;
    font-family: ${CSS.FONT700};
    color: #2b75cc;
    img {
      margin: 0 6px 0 0;
    }
  }
  .btnToMoreJobs {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 19px 15px;
    box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.12);
    border-radius: 8px;
    transition: all 0.3s ease 0s;
    &:hover {
      box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.3);
    }
    span {
      display: flex;
      align-items: center;
      font-size: 12px;
      line-height: 16px;
      font-family: ${CSS.FONT600};
      color: #0e142c;
      strong {
        font-family: ${CSS.FONT700};
        color: #2b75cc;
      }
      img {
        margin: 0 8px 0 0;
      }
    }
  }
  .jobEmptyBox {
    padding: 0 20px;
    width: 100%;
    margin: 0 0 45px;
  }
  .jobEmptyBoxItem {
    height: 384px;
    width: 100%;
    background: #f5f9fc;
    border-radius: 8px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    padding: 0 10px;
    div {
      text-align: center;
    }
    span {
      display: block;
      font-size: 20px;
      line-height: 27px;
      color: #b8c8d9;
      width: 100%;
      margin: 23px 0 0;
      font-family: ${CSS.FONT700};
    }
  }
`;

export default JobsStyle;
