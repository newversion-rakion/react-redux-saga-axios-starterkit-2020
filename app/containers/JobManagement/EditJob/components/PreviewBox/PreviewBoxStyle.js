import styled from 'styled-components';
import * as CSS from 'utils/styleSheetHelpers';

const PreviewBoxStyle = styled.div`
  width: 100%;
  .previewBox {
    padding: 0 0 5px;
  }
  .previewBoxContent {
    width: 100%;
    overflow: hidden;
    .iphone {
      width: 100%;
    }
    .previewBoxFormData {
      padding: 60px 40px 15px;
      height: 100%;
      position: relative;
      z-index: 2;
    }
  }
`;

export default PreviewBoxStyle;
