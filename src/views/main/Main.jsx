import React, { forwardRef } from 'react';
import { useTranslation } from 'context/LangWrapper/useTranslation';
import { Parallax } from 'react-parallax';
import styled, { keyframes } from 'styled-components';
import argonath from 'assets/img/argonathj.jpg';
import Subtitle from './components/Subtitle';
import HireMeButton from './components/HireMeButton';
import ScrollDown from './components/ScrollDown';
import Social from './components/Social';
import HireButton from './components/HireButton';
import { Box } from '@material-ui/core';
const img = argonath;

const insideStyles = {
  background: 'white',
  padding: 20,
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%,-50%)',
};
const HeroDiv = styled.div`
  height: 100vh;
  min-height: 100vh;
`;

const ContentDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  flex-grow: 1;
  min-height: 100%;
`;

const flip = keyframes`
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    opacity: 0;
  }
  `;

const TitleOne = styled.h1`
  font-size: 3rem;
  color: ${(p) => p.theme.palette.primary.light};
`;
const TitleTwo = styled.h1`
  font-size: 3rem;
  color: ${(p) => p.theme.palette.secondary.light};
  /* animation-duration: 2s;
  backface-visibility: visible !important;
  border-radius: 10%; */
  /* :hover {
    animation-name: ${flip};
  } */
`;

function Main(props, ref) {
  const {
    Main: { title, hireBtnText, type },
  } = useTranslation();
  const splitTitle = title.split(' ');
  return (
    <Parallax
      bgImage={img}
      bgImageAlt="main section background img"
      bgImageStyle={{ height: '100vh', opacity: '0.7' }}
      strength={500}
    >
      <HeroDiv>
        <ContentDiv>
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="center"
            pb={5}
          >
            <TitleOne>{splitTitle[0]}</TitleOne>
            <TitleTwo>{splitTitle[1]}</TitleTwo>
          </Box>
          <br></br>
          <Subtitle type={type} />
          <br></br>
          <HireMeButton text={hireBtnText} />
          <HireButton text={hireBtnText} />
          <ScrollDown ref={ref} />
          <Social size="2rem" style={{ size: '2em' }} />
        </ContentDiv>
      </HeroDiv>
    </Parallax>
  );
}

export default forwardRef(Main);
