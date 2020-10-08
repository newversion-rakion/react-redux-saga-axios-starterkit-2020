import React from 'react';
import PropTypes from 'prop-types';
import Iphone from 'images/iphone.png';
import PreviewBoxStyle from './PreviewBoxStyle';

const PreviewBox = props => {
  const { watchAllFields } = props;
  return (
    <PreviewBoxStyle>
      <div className="previewBox">
        <div className="previewBoxContent">
          <img className="iphone" src={Iphone} alt="" />
          <div className="previewBoxFormData">
            <div>{JSON.stringify(watchAllFields)}</div>
          </div>
        </div>
      </div>
    </PreviewBoxStyle>
  );
};

PreviewBox.propTypes = {
  watchAllFields: PropTypes.object,
};

export default PreviewBox;
