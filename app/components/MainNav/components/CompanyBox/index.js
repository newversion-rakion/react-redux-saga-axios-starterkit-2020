import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Modal } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers';
import * as yup from 'yup';
import Icon from 'components/Icon';
import editIcon from 'images/icons/mainNav/edit.svg';
import closeMainNavIcon from 'images/icons/mainNav/closeMainNav.svg';
import changeUserAvt from 'images/icons/dashboard/changeUserAvt.svg';
import teamMemberThumb from 'images/draft/teamMemberThumb.jpg';
import CompanyBoxStyle from './CompanyBoxStyle';

const schema = yup.object().shape({
  company_name: yup.string().required('Password is required'),
});

const CompanyBox = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { register, handleSubmit, errors } = useForm({
    shouldFocusError: true,
    shouldUnregister: true,
    defaultValues: {},
    resolver: yupResolver(schema),
  });

  const onSubmitForm = () => {
    console.log('form is submit');
  };

  return (
    <CompanyBoxStyle>
      <div className="wrapCompanyInfo">
        <Link to="/company/jobs">
          <div className="companyThumb">
            <img src={teamMemberThumb} alt="" />
          </div>
          Spotify
        </Link>
      </div>
      <button type="button" className="btnEditCompany" onClick={handleShow}>
        <Icon src={editIcon} alt="" />
      </button>

      <Modal
        className="editCompanyFormWrapper"
        show={show}
        onHide={handleClose}
      >
        <div className="editCompanyForm">
          <button
            type="button"
            className="btnCloseEditCompanyModal"
            onClick={handleClose}
          >
            <Icon src={closeMainNavIcon} alt="" />
          </button>
          <h4 className="formTitle">Edit Team</h4>
          <div className="formThumb">
            <div className="formThumbInner">
              <img src={teamMemberThumb} alt="" />
            </div>
            <div className="smallIcon">
              <Icon src={changeUserAvt} alt="" />
            </div>
          </div>

          <form onSubmit={handleSubmit(onSubmitForm)}>
            <div className="form-group">
              <span className="formLabel">Company Name</span>
              <input
                className="form-control"
                name="company_name"
                type="text"
                ref={register}
              />
              {errors.company_name && (
                <span className="formError">{errors.company_name.message}</span>
              )}
            </div>
            <div className="btnWrapper">
              <button type="submit">Save Info</button>
            </div>
          </form>
        </div>
      </Modal>
    </CompanyBoxStyle>
  );
};

export default CompanyBox;
