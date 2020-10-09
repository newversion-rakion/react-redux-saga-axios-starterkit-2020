import styled from 'styled-components';
import * as CSS from 'utils/styleSheetHelpers';

const StepNavStyle = styled.div`
  margin: 0 0 30px;
  .stepNav {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    li {
      width: 175px;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      cursor: pointer;
      &.isValid {
        span {
          background: #6da8ec;
          box-shadow: none;
          border-color: transparent;
          &:before {
            content: '';
            opacity: 1;
            visibility: visible;
            width: 6px;
            height: 10px;
            background: none;
            top: 2px;
            left: 5px;
            transform: rotate(45deg);
            border-radius: 0;
            border: 0;
            border-right: 2px solid #ffffff;
            border-bottom: 2px solid #ffffff;
          }
        }
      }
      &:not(.isValid) {
        &.isActive,
        &:hover {
          span {
            background: #ffffff;
            box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.22);
            border-color: #2b75cc;
            &:before {
              opacity: 1;
              visibility: visible;
            }
          }
        }
      }
      &.isActive,
      &:hover {
        p {
          font-family: ${CSS.FONT700};
          color: #2b75cc;
        }
      }
      &:last-child {
        span {
          &:after {
            display: none;
          }
        }
      }
    }
    button {
      background: none;
      border: 0;
      padding: 0;
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }
    span {
      background: none;
      padding: 0;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background: #ccd2da;
      display: block;
      position: relative;
      border: 2px solid #ccd2da;
      transition: all 0.3s ease 0s;
      &:before {
        content: '';
        opacity: 0;
        visibility: hidden;
        width: 12px;
        height: 12px;
        background: #2b75cc;
        position: absolute;
        top: 2px;
        left: 2px;
        border-radius: 50%;
        transition: all 0.3s ease 0s;
      }
      &:after {
        content: '';
        display: block;
        position: absolute;
        height: 2px;
        background: #ccd2da;
        left: 100%;
        top: 50%;
        margin-top: -1px;
        width: 175px;
        z-index: -1;
      }
    }
    p {
      width: 100%;
      margin: 6px 0 0;
      text-align: center;
      font-size: 12px;
      font-family: ${CSS.FONT600};
      line-height: 16px;
      color: #686d86;
      letter-spacing: 0.3px;
      transition: all 0.3s ease 0s;
    }
  }
`;

export default StepNavStyle;
