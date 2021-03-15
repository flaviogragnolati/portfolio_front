import React from 'react';
import styled from 'styled-components';
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import ResponsiveProjectCard from 'components/ProjectCard';

import useScreenSize from 'utils/useScreenSize';
import useWindowDimensions from 'utils/useWindowDimensions';
import useWindowDimensionsInitial from 'utils/useWindowDimensionInitial';

const StyledCarousel = styled(CarouselProvider)`
  width: 100%;
  height: 100%;
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
  border-top: 1vmin solid ${(p) => p.theme.palette.text.primary};
  border-right: 1vmin solid ${(p) => p.theme.palette.text.primary};
  box-shadow: 0 0 0 lightgray;
  transition: all 200ms ease;
  transform: translate3d(0, -50%, 0) rotate(-135deg);
  &:hover {
    border-color: orange;
    box-shadow: 0.5vmin -0.5vmin 0 ${(p) => p.theme.palette.text.secondary};
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
  border-top: 1vmin solid ${(p) => p.theme.palette.text.primary};
  border-right: 1vmin solid ${(p) => p.theme.palette.text.primary};
  box-shadow: 0 0 0 lightgray;
  transition: all 200ms ease;
  transform: translate3d(0, -50%, 0) rotate(45deg);
  &:hover {
    border-color: orange;
    box-shadow: 0.5vmin -0.5vmin 0 ${(p) => p.theme.palette.text.secondary};
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

function ProjectCarrousel({ projects }) {
  const {
    mobile,
    tablet,
    desktop,
    // size: { height, width },
  } = useScreenSize();

  const { height, width } = useWindowDimensionsInitial();
  console.log('size', height, width);
  //   const { height, width } = useWindowDimensions();
  const ratio = width / height;

  let slideWidth, slideHeight, screenType;
  if (0.9 <= ratio && ratio <= 1.1) {
    // console.log('ratio between 0.9,1.1', ratio);
    slideWidth = 1;
    slideHeight = 1;
    screenType = 'square';
  } else if (ratio > 1.1) {
    // console.log('ratio  >1.1', ratio);
    slideWidth = desktop ? 3 : tablet.high ? 3 : tablet.low ? 2 : 1;
    slideHeight = desktop ? 1.25 : tablet.high ? 2.5 : tablet.low ? 1.9 : 2.45;
    screenType = 'landscape';
  } else {
    // console.log('ratio  <0.9', ratio);
    slideWidth = desktop ? 3 : tablet.high ? 3 : tablet.low ? 1 : 1;
    slideHeight = desktop ? 2 : tablet.high ? 2.45 : tablet.low ? 0.8 : 2.3;
    screenType = 'portrait';
  }
  return (
    <StyledCarousel
      naturalSlideWidth={slideWidth}
      naturalSlideHeight={slideHeight}
      totalSlides={projects.length}
      infinite={true}
      visibleSlides={1}
    >
      <Slider>
        {projects.map((project, idx) => (
          <Slide index={idx}>
            <ResponsiveProjectCard project={project} screenType={screenType} />
          </Slide>
        ))}
      </Slider>
      <StyledBack />
      <StyledNext />
    </StyledCarousel>
  );
}

export default ProjectCarrousel;
