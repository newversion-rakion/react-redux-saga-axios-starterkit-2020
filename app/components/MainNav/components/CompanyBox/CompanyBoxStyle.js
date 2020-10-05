import styled from 'styled-components';
import * as CSS from 'utils/styleSheetHelpers';

const CompanyBoxStyle = styled.div`
  padding: 10px 30px 7px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .wrapCompanyInfo {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    width: calc(100% - 28px);
    padding: 0 5px 0 0;
    a {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      font-size: 16px;
      font-family: ${CSS.FONT700};
      color: #000000;
      &:hover {
        color: #2b75cc;
      }
    }
  }
  .companyThumb {
    width: 32px;
    height: 32px;
    overflow: hidden;
    border-radius: 50%;
    border: 2px solid #ffffff;
    margin: 0 10px 0 0;
    box-shadow: 0px 0px 5.33333px rgba(0, 0, 0, 0.12),
      inset 0px 0px 8px rgba(0, 0, 0, 0.12);
  }
  .btnEditCompany {
    background: none;
    border: 0;
    padding: 0;
    line-height: 0;
    width: 28px;
    &:hover {
      object {
        filter: ${CSS.FILTER_BLUE};
      }
    }
  }
`;

export default CompanyBoxStyle;
