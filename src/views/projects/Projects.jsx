import React from 'react';
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from 'pure-react-carousel';

import ProjectCard from './components/ProjectCard';
import 'pure-react-carousel/dist/react-carousel.es.css';
import styled from 'styled-components';
import { useMediaQuery } from '@material-ui/core';

const StyledCarousel = styled(CarouselProvider)`
  width: 100%;
  position: relative;
`;

const StyledBack = styled(ButtonBack)`
  all: unset;
  position: absolute;
  left: 0;
  top: 50%;
  width: 3vmin;
  height: 3vmin;
  background: transparent;
  border-top: 1vmin solid white;
  border-right: 1vmin solid white;
  box-shadow: 0 0 0 lightgray;
  transition: all 200ms ease;
  transform: translate3d(0, -50%, 0) rotate(-135deg);
  &:hover {
    border-color: orange;
    box-shadow: 0.5vmin -0.5vmin 0 white;
    cursor: pointer;
  }
  &:before {
    // for better hit area
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-40%, -60%) rotate(45deg);
    width: 200%;
    height: 200%;
  }
`;

const StyledNext = styled(ButtonNext)`
  all: unset;
  position: absolute;
  right: 0;
  top: 50%;
  width: 3vmin;
  height: 3vmin;
  background: transparent;
  border-top: 1vmin solid white;
  border-right: 1vmin solid white;
  box-shadow: 0 0 0 lightgray;
  transition: all 200ms ease;
  transform: translate3d(0, -50%, 0) rotate(45deg);
  &:hover {
    border-color: orange;
    box-shadow: 0.5vmin -0.5vmin 0 white;
    cursor: pointer;
  }
  &:before {
    // for better hit area
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-40%, -60%) rotate(45deg);
    width: 200%;
    height: 200%;
  }
`;

function Projects() {
  const matches = useMediaQuery((theme) => theme.breakpoints.up('sm'));
  console.log('matches', matches);
  return (
    <>
      Looking for a custom job? Click here to contact me! 👋
      <StyledCarousel
        naturalSlideWidth={matches ? 300 : 200}
        naturalSlideHeight={matches ? 125 : 400}
        totalSlides={3}
        infinite={true}
        visibleSlides={1}
      >
        <Slider>
          <Slide index={0}>
            <ProjectCard />
          </Slide>
          <Slide index={1}>
            <ProjectCard />
          </Slide>
          <Slide index={2}>
            <ProjectCard />
          </Slide>
        </Slider>
        <StyledBack />
        <StyledNext />
      </StyledCarousel>
    </>
  );
}

export default Projects;
