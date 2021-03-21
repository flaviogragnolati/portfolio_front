import React, { forwardRef } from 'react';
import { useTranslation } from 'context/LangWrapper/useTranslation';
import { Parallax } from 'react-parallax';
import styled, { keyframes } from 'styled-components';
import argonath from 'assets/img/argonathj.jpg';
import Subtitle from './components/Subtitle';
import HireMeButton from './components/HireMeButton';
import ScrollDown from './components/ScrollDown';
import HireButton from './components/HireButton';
import { Box, Typography } from '@material-ui/core';
import ParticlesBackground from 'views/main/components/ParticlesBackground';
import useScreenSize from 'utils/useScreenSize';

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
  /* position: absolute;
  top: 0;
  left: -250px;*/
  /* width: 100vw; */
  height: 100vh;
  min-height: 100vh;
  position: relative;
  z-index: 1;
  /* z-index: ${(p) => p.theme.zIndex.drawer + 1}; */
`;

const ContentDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  min-height: 100%;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0%);
  z-index: 10;
`;

const TitleOne = styled(Typography)`
  font-weight: 500;
  color: ${(p) => p.theme.palette.primary.light};
  /* background-color: ${(p) => p.theme.main}; */
  border-radius: 25%;
  background: radial-gradient(${(p) => p.theme.main}, transparent);
`;
const TitleTwo = styled(Typography)`
  font-weight: 500;
  color: ${(p) => p.theme.palette.secondary.light};
  border-radius: 25%;
  background: radial-gradient(${(p) => p.theme.main}, transparent);
`;

function Main(props) {
  const {
    Main: { title, hireBtnText, type },
  } = useTranslation();
  const { mobile, tablet, desktop } = useScreenSize();

  const splitTitle = title.split(' ');

  return (
    <HeroDiv>
      <ParticlesBackground />
      <ContentDiv>
        <Box
          display="flex"
          // flexDirection={mobile || tablet ? 'column' : 'row'}
          flexDirection="row"
          justifyContent="center"
          alignItems="center"
          pb={5}
          flexWrap="wrap"
        >
          <TitleOne variant={mobile || tablet.low ? 'h2' : 'h1'}>
            {splitTitle[0]}
          </TitleOne>
          <TitleTwo variant={mobile || tablet.low ? 'h2' : 'h1'}>
            {splitTitle[1]}
          </TitleTwo>
        </Box>
        <br></br>
        <Box pb={5}>
          <Subtitle type={type} />
        </Box>
        {/* <HireMeButton text={hireBtnText} /> */}
        {/* <HireButton text={hireBtnText} /> */}
        <ScrollDown />
        {/* <Social size="2rem" style={{ size: '2em' }} /> */}
      </ContentDiv>
    </HeroDiv>
  );

  // return (
  //   <Parallax
  //     bgImage={img}
  //     bgImageAlt="main section background img"
  //     bgImageStyle={{ height: '100vh', opacity: '0.7' }}
  //     strength={500}
  //   >
  //     <HeroDiv>
  //       <ContentDiv>
  //         <Box
  //           display="flex"
  //           // flexDirection={mobile || tablet ? 'column' : 'row'}
  //           flexDirection="row"
  //           justifyContent="center"
  //           alignItems="center"
  //           pb={5}
  //           flexWrap="wrap"
  //         >
  //           <TitleOne variant="h1">{splitTitle[0]}</TitleOne>
  //           <TitleTwo variant="h1">{splitTitle[1]}</TitleTwo>
  //         </Box>
  //         <br></br>
  //         <Subtitle type={type} />
  //         <br></br>
  //         {/* <HireMeButton text={hireBtnText} /> */}
  //         {/* <HireButton text={hireBtnText} /> */}
  //         <ScrollDown />
  //         {/* <Social size="2rem" style={{ size: '2em' }} /> */}
  //       </ContentDiv>
  //     </HeroDiv>
  //   </Parallax>
  // );
}

export default Main;
