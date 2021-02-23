import React, { forwardRef } from 'react';
import { useTanslation } from 'context/LangWrapper/useTranslation';
import { Parallax } from 'react-parallax';
import styled, { keyframes } from 'styled-components';
import argonath from 'assets/img/argonathj.jpg';
import Subtitle from './components/Subtitle';
import HireMeButton from 'views/main/components/HireMeButton';
import ScrollDown from 'views/main/components/ScrollDown';
import Social from 'views/main/components/Social';
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

const Title = styled.h1`
  font-size: 2rem;
  color: gray;
  padding: 2rem;
  animation-duration: 2s;
  backface-visibility: visible !important;
  border-radius: 10%;
  :hover {
    animation-name: ${flip};
  }
`;

function Main(props, ref) {
  const {
    Test: { title, body },
  } = useTanslation();
  return (
    <Parallax
      bgImage={img}
      bgImageAlt="main section backgroung img"
      bgImageStyle={{ height: '100vh', opacity: '0.7' }}
      strength={500}
    >
      <HeroDiv>
        <ContentDiv>
          <Title>Flavio Gragnolati</Title>
          <br></br>
          <Subtitle />
          <br></br>
          <HireMeButton />
          <ScrollDown ref={ref} />
          <Social size="2rem" style={{ size: '2em' }} />
        </ContentDiv>
      </HeroDiv>
    </Parallax>
  );
}

export default forwardRef(Main);
