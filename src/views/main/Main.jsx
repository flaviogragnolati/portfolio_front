import React from 'react';
import { useTanslation } from 'context/LangWrapper/useTranslation';
import { Parallax } from 'react-parallax';
import styled from 'styled-components';
import argonath from 'assets/img/argonathj.jpg';
import { Height } from '@material-ui/icons';

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
function Main() {
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
        Content goes here. Parallax height grows with content height.
      </HeroDiv>
    </Parallax>
  );
}

export default Main;
