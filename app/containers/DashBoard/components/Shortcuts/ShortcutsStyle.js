import styled from 'styled-components';
import * as CSS from 'utils/styleSheetHelpers';

const ShortcutsStyle = styled.div`
  width: 100%;
  margin: 0 0 42px;
  .boxTitle {
    margin: 0 0 22px;
    font-size: 22px;
    line-height: 30px;
    display: flex;
    align-items: center;
    color: #333333;
    font-family: ${CSS.FONT700};
  }
  .shortcutsBoxRow {
    display: flex;
    flex-wrap: wrap;
    margin: 0 -15px;
    .shortcutsBoxCol {
      padding: 0 15px;
      width: calc(100% / 6);
    }
    .btnEditCompany {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      .shortcutThumb {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        width: 80px;
        height: 80px;
        box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.04);
        border: 2.4px solid #e3e4e5;
        border-radius: 50%;
        margin: 0 0 12px;
        &:hover {
          object {
            filter: ${CSS.FILTER_BLUE};
          }
        }
        object {
          max-width: 28px;
        }
      }
      span {
        display: block;
        width: 100%;
        text-align: center;
        font-size: 15px;
        line-height: 20px;
        color: #333333;
        font-family: ${CSS.FONT600};
        strong {
          display: block;
          font-family: ${CSS.FONT700};
        }
      }
    }
  }
`;

export default ShortcutsStyle;
