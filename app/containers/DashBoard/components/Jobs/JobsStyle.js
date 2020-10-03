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
    box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.12);
    border-radius: 8px;
    overflow: hidden;
    margin: 0 0 24px;
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
`;

export default JobsStyle;
