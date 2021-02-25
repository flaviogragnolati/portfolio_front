import React from 'react';
import styled from 'styled-components';
// import './ProjectCard.scss';
import img from 'assets/img/project1.jpg';

//Hover in Left Div with tags
const Details = styled.div`
  color: black;
  position: absolute;
  top: 0;
  bottom: 0;
  left: -100%;
  margin: auto;
  transition: left 0.2s;
  background: rgba(255, 255, 255, 0.3);
  padding: 10px;
  width: 100%;
`;
const Tag = styled.label`
  font-size: 0.9rem;
  color: inherit;
  &:hover {
    color: ${(p) => p.theme.palette.secondary.dark};
  }
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
  margin: 1rem auto;
  box-shadow: 0 3px 7px -1px rgba(#000, 0.1);
  margin-bottom: 1.6%;
  background: ${(p) => p.theme.palette.background.paper};
  line-height: 1.4;
  font-family: sans-serif;
  border-radius: 5px;
  overflow: hidden;
  z-index: 0;
  &:hover ${Photo} {
    transform: scale(1.3) rotate(3deg);
  }
  &:hover ${Details} {
    backgorund-color: red;
    left: 0%;
  }
  ${(p) => p.theme.breakpoints.up('sm')} {
    flex-direction: row;
    min-width: 70px;
    max-width: 70%;
    height: 50vh;
  }
`;

//Left Meta Div
const Meta = styled.div`
  position: relative;
  z-index: 0;
  height: 200px;
  ${(p) => p.theme.breakpoints.up('sm')} {
    flex-basis: 40%;
    height: auto;
  }
`;

//Right Description Div
const Description = styled.div`
  padding: 1rem;
  background: ${(p) => p.theme.palette.background.paper};
  position: relative;
  z-index: 1;
  ${(p) => p.theme.breakpoints.up('sm')} {
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
const DescriptionText = styled.p`
  color: ${(p) => p.theme.palette.text.secondary};
  position: relative;
  margin: 1rem 0 0;
  margin-top: 1.25rem;
  &:before {
    content: '';
    position: absolute;
    height: 5px;
    background: ${(p) => p.theme.palette.secondary.light};
    width: 35px;
    top: -0.75rem;
    border-radius: 3px;
  }
`;
const Title = styled.h3`
  line-height: 1;
  margin: 0;
  font-size: 1.7rem;
  color: ${(p) => p.theme.palette.text.primary};
`;
const SubTitle = styled.h4`
  font-size: 1rem;
  font-weight: 300;
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

const More = styled.p`
  text-align: right;
  color: ${(p) => p.theme.palette.secondary.main};
  /* display: inline-block;
  position: relative; */
  &:after {
    content: '>';
    margin-left: -10px;
    opacity: 0;
    vertical-align: middle;
    transition: margin 0.3s, opacity 0.3s;
  }
  &:hover:after {
    margin-left: 5px;
    opacity: 1;
  }
`;

function ProjectCard() {
  return (
    <Card>
      <Meta>
        <Photo>
          <Img src={img} />
        </Photo>
        <Details>
          <Tag>John Doe</Tag>
          <br></br>
          <Tag>Aug. 24, 2015</Tag>
          <br></br>
          <Tag>Learn</Tag>
          <Tag>Code</Tag>
          <Tag>HTML</Tag>
          <Tag>CSS</Tag>
        </Details>
      </Meta>
      <Description>
        <Title>Learning to Code</Title>
        <SubTitle>Opening a door to the future</SubTitle>
        <DescriptionText>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum
          dolorum architecto obcaecati enim dicta praesentium, quam nobis! Neque
          ad aliquam facilis numquam. Veritatis, sit.
        </DescriptionText>
        <Links>
          <p>Github</p>
          <p>WWW</p>
          <More>Preview</More>
        </Links>
      </Description>
    </Card>
  );
}

export default ProjectCard;
