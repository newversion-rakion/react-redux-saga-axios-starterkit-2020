import styled from 'styled-components';
import * as CSS from 'utils/styleSheetHelpers';

const EmptyJobBoxStyle = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  .emptyJobBoxItem {
    width: 100%;
    max-width: 400px;
    text-align: center;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
  .itemThumb {
    margin: 0 0 45px;
  }
  .itemTitle {
    font-size: 28px;
    line-height: 38px;
    color: #000000;
    font-family: ${CSS.FONT700};
    margin: 0 0 15px;
  }
  .itemDescription {
    font-size: 16px;
    font-family: ${CSS.FONT500};
    opacity: 0.7;
    max-width: 300px;
    color: #000000;
    margin: 0 0 50px;
  }

  .btnCreateJob {
    color: #ffffff;
    background: #2b75cc;
    border-radius: 50px;
    font-size: 20px;
    line-height: 27px;
    padding: 18px 21px;
    display: flex;
    align-items: center;
    min-width: 264px;
    justify-content: center;
    font-family: ${CSS.FONT700};
    img {
      margin: 0 8px 0 0;
    }
  }
`;

export default EmptyJobBoxStyle;
