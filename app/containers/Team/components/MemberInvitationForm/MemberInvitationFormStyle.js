import styled from 'styled-components';
import * as CSS from 'utils/styleSheetHelpers';

const MemberInvitationFormStyle = styled.div`
  width: 100%;
  margin: 0 0 38px;
  .form-group {
    position: relative;
  }
  .form-control {
    height: 73px;
    border: 2px solid rgba(143, 146, 153, 0.5);
    box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.12);
    border-radius: 8px;
    padding: 5px 140px 5px 24px;
    font-size: 18px;
    color: #333333;
    font-family: ${CSS.FONT600};
    &::placeholder {
      color: #8f9299;
      font-family: ${CSS.FONT600};
    }
  }
  .btnSubmit {
    color: #ffffff;
    font-family: ${CSS.FONT700};
    font-size: 14px;
    background: #2b75cc;
    border-radius: 60px;
    min-width: 90px;
    position: absolute;
    right: 25px;
    top: 20px;
    z-index: 2;
    transition: all 0.3s ease 0s;
    &:hover {
      background: #225ea3;
    }
  }
`;

export default MemberInvitationFormStyle;
