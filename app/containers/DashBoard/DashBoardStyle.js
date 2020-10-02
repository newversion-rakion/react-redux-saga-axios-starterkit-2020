import styled from 'styled-components';
import * as CSS from 'utils/styleSheetHelpers';

const DashBoardStyle = styled.div`
  width: 100%;
  max-width: 1120px;
  padding: 30px;
  margin: 0 auto;
  .mainBoxRow {
    display: flex;
    flex-wrap: wrap;
    margin: 0 -30px;
  }
  .jobListingsBox {
    padding: 0 30px;
    width: calc(100% - 420px);
  }
  .messagesBox {
    padding: 0 30px;
    width: 420px;
  }
  .jobListingsBoxRow {
    display: flex;
    flex-wrap: nowrap;
    margin: 0 -20px;
  }
  .jobListingsBoxCol {
    width: 50%;
    padding: 0 20px;
  }
  .upperBox {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 0 22px;
    .boxTitle {
      margin: 0;
      font-size: 22px;
      line-height: 30px;
      display: flex;
      align-items: center;
      color: #333333;
      font-family: ${CSS.FONT700};
    }
    a {
      font-size: 14px;
      line-height: 19px;
      display: flex;
      align-items: center;
      color: #2b75cc;
      font-family: ${CSS.FONT700};
    }
  }
  .lastlog {
    font-size: 12px;
    line-height: 16px;
    color: #8f9299;
    font-family: ${CSS.FONT600};
    strong {
      font-family: ${CSS.FONT700};
    }
  }
`;

export default DashBoardStyle;
