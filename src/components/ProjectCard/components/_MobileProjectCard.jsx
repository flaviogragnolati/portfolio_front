import React from 'react';
import styled from 'styled-components';
import img from 'assets/img/project1.jpg';
import StatusChip from './StatusChip';
import Date from './Date';
import TechStack from './TechStack';
import Icons from './Icons';

const hoverBg = `rgba(150, 150, 150, 0.4)`;
//Hover in Left Div with tags
const Details = styled.div`
  color: ${(p) => p.theme.palette.secondary.dark};
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0%;
  margin: auto;
  transition: left 0.2s;
  background: ${hoverBg};
  padding: 10px;
  width: 100%;
`;

//Left Photo Div
const Photo = styled.div`
  /* position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0; */
  /* background-size: cover;
  background-position: center; */
  transition: transform 0.2s;
  /* background-image: url (${img}); */
`;

const Img = styled.img`
  position: absolute;
  left: 0;
`;

//Main wrapper Div
const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  height: 100vh;
  margin: 1rem auto;
  box-shadow: 0 3px 7px -1px rgba(#000, 0.1);
  margin-bottom: 1.6%;
  background: ${(p) => p.theme.palette.background.paper};
  line-height: 1.4;
  font-family: sans-serif;
  border-radius: 5px;
  overflow: hidden;
  z-index: 0;
  /* &:hover ${Details} {
    backgorund-color: red;
    left: 0%;
  } */
`;

//Left Meta Div
const Meta = styled.div`
  position: relative;
  z-index: 0;
  height: 300px;
`;

//Right Description Div
const Description = styled.div`
  padding: 1rem;
  background: ${(p) => p.theme.palette.background.paper};
  position: relative;
  z-index: 1;
  height:100%;
  overflow:scroll;
  }
`;
const DescriptionText = styled.p`
  position: relative;
  color: ${(p) => p.theme.palette.text.secondary};
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
const Title = styled.h3`
  position: relative;
  line-height: 1;
  margin-top: 1rem;
  font-size: 1.7rem;
  color: ${(p) => p.theme.palette.text.primary};
`;
const SubTitle = styled.h4`
  position: relative;
  font-size: 1rem;
  font-weight: 300;
  text-transform: uppercase;
  color: ${(p) => p.theme.palette.text.secondary};
  margin-top: 15px;
`;

const Links = styled.div`
  position: relative;
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

function MobileProjectCard({ project }) {
  const {
    title,
    subtitle,
    description,
    status,
    tech,
    date,
    git,
    website,
    preview,
  } = project;
  return (
    <Card>
      <Meta>
        <Photo>
          <Img src={img} />
        </Photo>
        <Details>
          <TechStack tech={tech} />
        </Details>
      </Meta>
      <Description>
        <StatusChip status={status} size="small" />
        <Title>{title}</Title>
        <SubTitle>{subtitle}</SubTitle>
        <DescriptionText>{description}</DescriptionText>
        <Links>
          <Icons git={git} website={website} preview={preview} />
        </Links>
      </Description>
    </Card>
  );
}

export default MobileProjectCard;
