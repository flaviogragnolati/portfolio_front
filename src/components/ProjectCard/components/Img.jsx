import React from 'react';
import styled from 'styled-components';
// import img from 'assets/img/projects/wineStore.png';

const requestImageFile = require.context(
  '../../../assets/img/projects',
  false,
  /.png$/
);

const ImgDesktop = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  position: absolute;
  left: 0;
  z-index: -1;
`;

const ImgMobile = styled.img`
  height: 20px;
  width: 20px;
  object-fit: contain;
  z-index: -1;
  position: relative;
`;

function Img({ img, mobile, desktop }) {
  if (desktop) {
    return <ImgDesktop src={img} alt="project logo" />;
  } else {
    return <ImgMobile src={img} alt="project logo" />;
  }
}

export default Img;
