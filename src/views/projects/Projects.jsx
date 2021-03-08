import React from 'react';
import styled from 'styled-components';
import { useMediaQuery } from '@material-ui/core';
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { useTranslation } from 'context/LangWrapper/useTranslation';
import ResponsiveProjectCard from 'components/ProjectCard';
import useScreenSize from 'utils/useScreenSize';
import useWindowDimensions from 'utils/useWindowDimensions';

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

function Projects() {
  const {
    Projects: { subtitle, endphrase, projects },
  } = useTranslation();
  // const matches = useMediaQuery((theme) => theme.breakpoints.up('md'));
  const [mobile, tablet, desktop] = useScreenSize();

  const { height, width } = useWindowDimensions();
  const ratio = height / width;
  const w = width - (10 % width);
  return (
    <>
      Looking for a custom job? Click here to contact me! 👋
      <StyledCarousel
        naturalSlideWidth={w}
        naturalSlideHeight={
          desktop ? w * ratio : tablet ? w * ratio : w * (ratio + 0.4)
        }
        totalSlides={3}
        infinite={true}
        visibleSlides={1}
      >
        <Slider>
          {projects.map((project, idx) => (
            <Slide index={idx}>
              <ResponsiveProjectCard project={project} />
            </Slide>
          ))}
        </Slider>
        <StyledBack />
        <StyledNext />
      </StyledCarousel>
    </>
  );
}

export default Projects;
