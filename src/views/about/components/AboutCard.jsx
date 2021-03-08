import { Box, Grid, Typography } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';

//Import Icons for cards
import { Handshake, Glasses } from 'styled-icons/fa-solid';
import { Factory } from 'styled-icons/boxicons-solid';
import { Team } from 'styled-icons/remix-fill';
import { Brain } from 'styled-icons/boxicons-regular';
import { ChatAlt2 } from 'styled-icons/heroicons-solid';

import { defaults } from 'utils/config';

const {
  aboutCards: { team, learn, work, communication, problem, responsible },
} = defaults;

const Wrapper = styled.div`
  background-color: blue;
`;

const Front = styled.div`
  position: relative;
  background-color: ${(p) => p.theme.palette.primary.dark};
  color: white;
  display: flex;
  justify-content: center;
  align-content: center;
  flex: 0 0 100%;
  transition: all 1s cubic-bezier(0.5, 1.3, 0.5, 1.3);
  transform-style: preserve-3d;
  background-size: cover;
  background-position: center;
  z-index: 10;

  &:after {
    font-size: 2rem;
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;
    /* width: 30px; */
    /* height: 30px; */
    border: 15px solid ${(p) => p.theme.palette.secondary.dark};
    border-bottom-color: ${(p) => p.theme.main};
    border-right-color: ${(p) => p.theme.main};
  }
`;

const Back = styled.div`
  position: relative;
  background-color: #1b2d61;
  /* color: white; */
  display: flex;
  justify-content: center;
  align-content: center;
  text-align: center;
  flex: 0 0 100%;
  transition: all 1s cubic-bezier(0.5, 1.3, 0.5, 1.3);
  transform-style: preserve-3d;
  background-size: cover;
  background-position: center;
  background-color: ${(p) => p.theme.palette.background.paper};
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 100%;
  z-index: -1;
  transform: rotateY(-180deg);
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    /* width: 30px; */
    /* height: 30px; */
    /* border: 15px solid transparent;
    border-bottom-color: ${(p) => p.theme.palette.primary.dark};
    border-left-color: ${(p) => p.theme.palette.primary.dark}; */
  }
`;

const FlipBox = styled.div`
  display: flex;
  align-content: stretch;
  height: 15rem;
  width: 15rem;
  /* font-size: 4rem; */
  flex-wrap: wrap;
  position: relative;
  border: 10px solid transparent;
  padding: 0;
  margin-top: 5rem;
  /* border-top: 0; */
  perspective: 1000;
  &:hover ${Back} {
    transform: rotateY(0deg);
    z-index: 10;
  }
  &:hover ${Front} {
    transform: rotateY(180deg);
    z-index: -1;
  }
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  transform: translateZ(50px);
  text-shadow: 0px 0px 2px black;
`;

const Text = styled(Typography)`
  color: ${(p) => p.theme.palette.text.primary};
  /* font-size: 1.5rem; */
`;

const IconSelector = (icon, props) => {
  switch (icon) {
    case team:
      return <Team {...props} />;
    case learn:
      return <Glasses {...props} />;
    case work:
      return <Factory {...props} />;
    case communication:
      return <ChatAlt2 {...props} />;
    case problem:
      return <Brain {...props} />;
    case responsible:
      return <Handshake {...props} />;
    default:
      break;
  }
};

function AboutCard({ text, icon }) {
  return (
    // <Wrapper>
    // <Box     display="flex" justifyContent="center"   >
    <FlipBox>
      <Front>
        <Content>
          {/* <ChatAlt2 size="5rem" /> */}
          {IconSelector(icon, { size: '5rem' })}
        </Content>
      </Front>
      <Back>
        <Content>
          <Text variant="h6">{text}</Text>
        </Content>
      </Back>
    </FlipBox>
    // </Box>
    // </Wrapper>
  );
}

export default AboutCard;
