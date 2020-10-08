import styled from 'styled-components';
import * as CSS from 'utils/styleSheetHelpers';

const CreateJobSucceedStyle = styled.div`
  padding: 50px auto;
  .item {
    width: 566px;
    margin: 0 auto;
    box-shadow: 0px 0px 41px rgba(0, 0, 0, 0.08);
    border-radius: 4px;
    overflow: hidden;
  }
  .createJobSucceedScreenContent {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 34px 30px 80px;
  }
  h4 {
    width: 100%;
    color: #000000;
    font-size: 24px;
    line-height: 33px;
    font-family: ${CSS.FONT700};
    margin: 11px 0 26px;
  }
  p {
    font-size: 16px;
    line-height: 28px;
    color: #0e142c;
    font-family: ${CSS.FONT500};
    opacity: 0.7;
    max-width: 316px;
    margin: 0 auto 30px;
    text-align: center;
  }
  .btnGroup {
    width: 100%;
    display: flex;
    justify-content: center;
  }
  .btnMemberSearch {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    line-height: 25px;
    font-family: ${CSS.FONT700};
    color: #ffffff;
    background: #2b75cc;
    border-radius: 50px;
    padding: 17px 15px;
    min-width: 265px;
    &:hover {
      transition: all 0.3s ease 0s;
      background: #225ea3;
    }
    object {
      filter: ${CSS.FILTER_WHITE};
      margin: 0 13px 0 0;
    }
  }
`;

export default CreateJobSucceedStyle;
