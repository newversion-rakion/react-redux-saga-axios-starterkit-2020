import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Modal } from 'react-bootstrap';
import Icon from 'components/Icon';
import teamMemberThumb from 'images/draft/teamMemberThumb.jpg';
import Iphone from 'images/iphone.png';
import saveIcon from 'images/icons/save.svg';
import hiredIcon from 'images/icons/hired.svg';
import deleteIcon from 'images/icons/delete.svg';
import leftArrowIcon from 'images/icons/left-arrow.svg';
import locationIcon from 'images/icons/location.svg';
import PreviewBoxStyle from './PreviewBoxStyle';

const PreviewBox = props => {
  const { watchAllFields, coverFile, setValue } = props;
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <PreviewBoxStyle>
      <div className="headerButtons">
        <Link to="/company/jobs" className="btn btnCancel">
          Cancel
        </Link>
        <button type="submit" className="btn btn-primary btnSubmit">
          <Icon src={saveIcon} />
          Save change
        </button>
      </div>
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
            <div className="previewBoxFooter">
              <div className="btnGroup">
                <button type="button" className="btn btnApply">
                  Apply
                </button>
                <button type="button" className="btn btnShare">
                  Send to a Friend
                </button>
              </div>
              <div className="bottomBar" />
            </div>
          </div>
        </div>
      </div>
      <div className="footerButtons">
        <button
          type="button"
          onClick={handleShow}
          className="btn btn-primary btnToggleJobHireStage"
          disabled={watchAllFields.is_hired}
        >
          <Icon src={hiredIcon} />
          {watchAllFields.is_hired ? 'Hired' : ' Mark as Hired'}
        </button>
        <Link className="btn btnDeleteJob" to="/company/jobs">
          <Icon src={deleteIcon} />
          Delete job
        </Link>
      </div>

      <Modal className="confirmJobActionModal" show={show} onHide={handleClose}>
        <div className="confirmJobActionModalContent">
          <h4 className="modalTitle">Are you sure?</h4>
          <p className="modalDescription">
            By marking this job as <strong>Hired</strong>, you will not longer
            be able to receive applicants or edit the job.
          </p>
          <div className="btnGroup">
            <button
              type="button"
              onClick={() => {
                setValue('is_hired', true);
                handleClose();
              }}
              className="btn btn-primary btnConfirm"
            >
              Yes, Mark Job as Hired
            </button>
            <button
              type="button"
              onClick={handleClose}
              className="btn btnCancel"
            >
              Yes, Mark Job as Hired
            </button>
          </div>
        </div>
      </Modal>
    </PreviewBoxStyle>
  );
};

PreviewBox.propTypes = {
  watchAllFields: PropTypes.object,
  coverFile: PropTypes.object,
  setValue: PropTypes.func,
};

export default PreviewBox;
