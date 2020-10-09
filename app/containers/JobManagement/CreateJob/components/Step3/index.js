import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Icon from 'components/Icon';
import formThumbStep3 from 'images/thumbs/createJob/formThumbStep3.svg';
import teamMemberThumb from 'images/draft/teamMemberThumb.jpg';
import Iphone from 'images/iphone.png';
import leftArrowIcon from 'images/icons/left-arrow.svg';
import locationIcon from 'images/icons/location.svg';

const Step3 = ({
  activeStep,
  changeStep,
  watchAllFields,
  fileName,
  coverFile,
}) => (
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
            <div className="scrollableBox">
              <div className="previewThumb">
                <span className="iphoneBack">
                  <Icon src={leftArrowIcon} />
                </span>
                <img src={coverFile.src} alt="" />
              </div>
              <div className="previewContent">
                <h3 className="previewTitle">{watchAllFields.title}</h3>
                <div className="previewInfo">
                  <span className="previewInfoItem previewProfession">
                    {watchAllFields.profession &&
                      watchAllFields.profession.label}
                  </span>
                  <span className="previewInfoItem previewLocation">
                    <Icon src={locationIcon} />
                    {watchAllFields.location && watchAllFields.location.label}
                  </span>
                </div>
                <p className="previewDescription">
                  {watchAllFields.description}
                </p>
                <div className="previewAuthorBox">
                  <h5>Posted by</h5>
                  <div className="companyBox">
                    <div className="companyThumb">
                      <img src={teamMemberThumb} alt="" />
                    </div>
                    {JSON.parse(localStorage.getItem('user_info'))
                      .companyName || 'Company name'}
                  </div>
                </div>
              </div>
            </div>
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
  fileName: PropTypes.string,
  watchAllFields: PropTypes.object,
  coverFile: PropTypes.object,
};

export default Step3;
