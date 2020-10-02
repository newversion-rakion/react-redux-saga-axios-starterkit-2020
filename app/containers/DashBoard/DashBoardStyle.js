import styled from 'styled-components';

const DashBoardStyle = styled.div`
  width: 100%;
  max-width: 1090px;
  padding: 30px;
  margin: 0 auto;
  .mainBoxRow {
    display: flex;
    width: 100%;
    flex-wrap: nowrap;
    margin: 0 -30px;
  }
  .jobListingsBox {
    padding: 0 30px;
    width: calc(100% - 427px);
  }
  .messagesBox {
    padding: 0 30px;
    width: 427px;
  }
  .boxRow {
    display: flex;
    width: 100%;
    flex-wrap: nowrap;
    margin: 0 -20px;
  }
  .boxCol {
    width: 50%;
    padding: 0 20px;
  }
`;

export default DashBoardStyle;
