import React from 'react';
import styled from 'styled-components';
// import img from 'assets/img/projects/quizApp.png';

const importAll = (r) => {
  let images = {};
  r.keys().map((item, index) => (images[item.replace('./', '')] = r(item)));
  return images;
};

const images = importAll(
  require.context('../../../assets/img/projects', false, /.png$/)
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
  height: 100%;
  width: 100%;
  object-fit: contain;
  z-index: -1;
  position: relative;
`;

function ImgContainer({ imgPath, mobile, desktop }) {
  console.log('img en IMG', imgPath, mobile);

  if (desktop) {
    return <ImgDesktop src={images[imgPath].default} alt="Project logo" />;
  } else {
    return <ImgMobile src={images[imgPath].default} alt="Project logo" />;
  }
}

export default ImgContainer;
