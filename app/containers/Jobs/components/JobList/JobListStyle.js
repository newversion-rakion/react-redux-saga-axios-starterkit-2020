import styled from 'styled-components';
import * as CSS from 'utils/styleSheetHelpers';

const JobList = styled.div`
  width: 100%;
  padding: 0 0 15px;
  .upperBox {
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    margin: 0 -15px 40px;
  }
  .upperBoxLeft {
    width: 50%;
    padding: 0 15px;
  }
  .boxTitle {
    margin: 0;
    font-size: 25.265px;
    line-height: 35px;
    color: #000000;
    font-family: ${CSS.FONT600};
  }
  .behaviorBox {
    width: 50%;
    padding: 0 15px;
    text-align: right;
    a {
      color: #ffffff;
      background: #2b75cc;
      border-radius: 50px;
      font-size: 14px;
      line-height: 19px;
      padding: 12px 21px;
      display: inline-block;
      vertical-align: middle;
      font-family: ${CSS.FONT700};
      img {
        margin: 0 8px 0 0;
      }
    }
  }

  .jobList {
    .jobItem {
      display: flex;
      flex-wrap: nowrap;
      align-items: center;
      box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.12);
      border-radius: 8px;
      margin: 0 0 36px;
      transition: all 0.3s ease 0s;
      &:hover {
        box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.3);
      }
    }
    .thumb {
      width: 185px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 8px 0px 0px 8px;
      overflow: hidden;
      img {
        width: 100%;
      }
    }

    .content {
      width: calc(100% - 185px);
      padding: 10px 25px 10px 30px;
    }
  }

  .itemHeader {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 0 20px;
    .btnEditJob {
      border: 2.5265px solid #000000;
      border-radius: 50px;
      font-size: 13.9622px;
      line-height: 19px;
      color: #333333;
      font-family: ${CSS.FONT700};
      padding: 8px 23px;
    }
  }

  .createdDate {
    font-size: 14px;
    line-height: 19px;
    color: #000000;
    opacity: 0.5;
    font-family: ${CSS.FONT600};
    margin: 0;
  }

  .jobName {
    margin: 0 0 3px;
    font-size: 18px;
    line-height: 25px;
    font-family: ${CSS.FONT700};
    color: #0e142c;
  }

  .time {
    padding: 0 0 0 20px;
    position: relative;
    font-family: ${CSS.FONT600};
    &:before {
      content: '';
      display: block;
      width: 4px;
      height: 4px;
      border-radius: 50%;
      position: absolute;
      background: #808080;
      top: 7px;
      left: 8px;
    }
    strong {
      color: #000000;
      font-family: ${CSS.FONT700};
    }
  }

  .jobTags {
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    margin: 0 -6px 18px;
    li {
      padding: 0 6px;
    }
    a {
      color: #2b75cc;
      font-size: 12px;
      line-height: 16px;
      background: #f5f9fc;
      border-radius: 40px;
      font-family: ${CSS.FONT700};
      padding: 9px 17px;
    }
  }

  .footerItems {
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    margin: 0 -12px;
    li {
      padding: 0 12px;
    }
    a {
      display: flex;
      flex-wrap: nowrap;
      align-items: center;
      font-size: 12px;
      line-height: 16px;
      color: #333333;
      font-family: ${CSS.FONT700};
      transition: all 0.3s ease 0s;
      &:hover {
        color: #2b75cc;
      }
    }
    img {
      margin: 0 6px 0 0;
    }
  }
`;

export default JobList;
