import styled from 'styled-components';
import * as CSS from 'utils/styleSheetHelpers';

const TeamStyle = styled.div`
  width: 100%;
  .pageContent {
    padding: 30px;
    width: 100%;
    max-width: 660px;
    margin: 0 auto;
  }
  .item {
    width: 100%;
    padding: 35px 0 28px;
  }
  .itemThumb {
    margin: 0 0 3px;
    text-align: center;
    width: 100%;
  }
  h1 {
    margin: 0 0 16px;
    width: 100%;
    text-align: center;
    font-size: 28px;
    line-height: 38px;
    font-family: ${CSS.FONT700};
    color: #000000;
  }
  .boxDescription {
    margin: 0 auto;
    font-size: 16px;
    color: #000000;
    width: 100%;
    max-width: 415px;
    text-align: center;
    font-family: ${CSS.FONT500};
  }
`;

export default TeamStyle;
