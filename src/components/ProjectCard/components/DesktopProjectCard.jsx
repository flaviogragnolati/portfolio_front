import React from 'react';
import styled from 'styled-components';
import StatusChip from '../components/StatusChip';
import TechStack from '../components/TechStack';
import Icons from '../components/Icons';
import ImgContainer from './ImgContainer';
import { Typography } from '@material-ui/core';

const hoverBg = `rgba(150, 150, 150, 0.4)`;
//Hover in Left Div with tags
const Details = styled.div`
  color: ${(p) => p.theme.palette.secondary.dark};
  position: absolute;
  top: 0;
  height: 100%;
  left: -120%;
  margin: auto;
  transition: left 0.2s;
  background: ${hoverBg};
  padding: 10px;
  width: 100%;
`;

//Left Photo Div
const Photo = styled.div`
  transition: transform 0.2s;
`;

// const Img = styled.img`
//   position: absolute;
//   left: 0;
// `;

//Main wrapper Div
const Card = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: 1rem auto;
  box-shadow: 0 3px 7px -1px rgba(#000, 0.1);
  margin-bottom: 1.6%;
  background: ${(p) => p.theme.palette.background.paper};
  line-height: 1.4;
  font-family: sans-serif;
  border-radius: 5px;
  overflow: hidden;
  z-index: 0;

  &:hover ${Details} {
    backgorund-color: red;
    left: 0%;
  }
  ${(p) => p.theme.breakpoints.up('sm')} {
    flex-direction: row;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    /* min-width: 70px; */
    /* max-width: 70%; */
    width: 50vw;
    height: 50vh;
  }
`;

//Left Meta Div
const Meta = styled.div`
  position: relative;
  z-index: 0;
  height: 200px;
  flex-basis: 40%;
  height: auto;
`;

//Right Description Div
const Description = styled.div`
  padding: 1rem;
  background: ${(p) => p.theme.palette.background.paper};
  position: relative;
  z-index: 1;
  ${(p) => p.theme.breakpoints.up('md')} {
    flex-basis: 60%;
    &:before {
      transform: skewX(7deg);
      content: '';
      background: ${(p) => p.theme.palette.background.paper};
      width: 75px;
      position: absolute;
      left: -10px;
      top: 0;
      bottom: -100%;
      z-index: -1;
    }
  }
`;
const DescriptionText = styled(Typography)`
  color: ${(p) => p.theme.palette.text.secondary};
  position: relative;
  margin: 1rem 0 0;
  margin-top: 1.25rem;
  &:before {
    content: '';
    position: absolute;
    height: 5px;
    background: ${(p) => p.theme.palette.secondary.light};
    width: 55px;
    top: -0.75rem;
    border-radius: 3px;
  }
`;
const Title = styled(Typography)`
  line-height: 1;
  margin-top: 1rem;
  /* font-size: 1.7rem; */
  color: ${(p) => p.theme.palette.text.primary};
`;
const SubTitle = styled(Typography)`
  /* font-size: 1rem; */
  font-weight: 400;
  text-transform: uppercase;
  color: ${(p) => p.theme.palette.text.secondary};
  margin-top: 15px;
`;

const Links = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  justify-content: space-between;
  align-items: flex-end;
  width: 80%;
  padding: 0.2rem;
`;

function DesktopProjectCard({ project }) {
  const {
    title,
    img,
    subtitle,
    description,
    status,
    tech,
    git,
    website,
    preview,
  } = project;
  return (
    <Card>
      <Meta>
        <Photo>
          {/* <Img src={img} /> */}
          {console.log('img base', img)}
          <ImgContainer imgPath={img} mobile={false} desktop={true} />
        </Photo>
        <Details>
          <TechStack tech={tech} />
        </Details>
      </Meta>
      <Description>
        <StatusChip status={status} size="small" />
        <Title variant="h3">{title}</Title>
        <SubTitle variant="subtitle1">{subtitle}</SubTitle>
        <DescriptionText variant="body1">{description}</DescriptionText>
        <Links>
          <Icons git={git} website={website} preview={preview} />
          {/* <More>Preview: {preview}</More> */}
        </Links>
      </Description>
    </Card>
  );
}

export default DesktopProjectCard;
