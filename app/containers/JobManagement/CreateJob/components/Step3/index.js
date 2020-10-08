import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import formThumbStep3 from 'images/thumbs/createJob/formThumbStep3.svg';
import Iphone from 'images/iphone.png';

const Step3 = ({ activeStep, changeStep, watchAllFields }) => (
  <div
    className={classNames(
      'stepItem',
      activeStep === 'step3' ? 'isActiveStep' : '',
    )}
  >
    <div className="formThumb">
      <img src={formThumbStep3} alt="" />
    </div>
    <div className="stepItemContent">
      <h3 className="stepTitle">
        <span>3</span>
        Preview Your Job Listing
      </h3>
      <p className="stepDescription">
        This is how your Job Listing will show up to Mixer Members on our iOS
        app.
      </p>

      <div className="previewBox">
        <div className="previewBoxContent">
          <img className="iphone" src={Iphone} alt="" />
          <div className="previewBoxFormData">
            <div>{JSON.stringify(watchAllFields)}</div>
          </div>
        </div>
      </div>

      <div className="stepFooter">
        <div className="stepFooterLeft">
          <strong>Step 3</strong> of 3
        </div>
        <div className="stepFooterRight">
          <button
            type="button"
            onClick={() => {
              changeStep('step2');
            }}
            className="btn btnCancel"
          >
            Back
          </button>
          <button type="submit" className="btn btn-primary btnNextStep">
            Submit Listing
          </button>
        </div>
      </div>
    </div>
  </div>
);

Step3.propTypes = {
  activeStep: PropTypes.string,
  changeStep: PropTypes.func,
  watchAllFields: PropTypes.object,
};

export default Step3;
