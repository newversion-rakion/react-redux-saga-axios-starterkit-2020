import styled from 'styled-components';
import * as CSS from 'utils/styleSheetHelpers';

const EditJobFormStyle = styled.div`
  width: 100%;
  .formRow {
    display: flex;
    flex-wrap: wrap;
    margin: 0 -75px;
  }
  .formContentCol {
    padding: 0 75px;
    width: calc(100% - 420px);
  }
  .formPreviewCol {
    width: 420px;
    padding: 0 75px;
  }
  .formTitle {
    margin: 0 0 23px;
    font-size: 25.265px;
    line-height: 35px;
    color: #000000;
    font-family: ${CSS.FONT600};
  }
  .formSubTitle {
    margin: 0;
    padding: 15px 0 20px;
    font-size: 18px;
    font-family: ${CSS.FONT700};
    line-height: 24px;
    color: #0e142c;
  }
`;

export default EditJobFormStyle;
