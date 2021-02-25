import React from 'react';
import styled, { keyframes } from 'styled-components';

const Pulse = keyframes`
 0% { box-shadow: 0 0 0 0 #ef8f6e; }
`;

const Fill = keyframes`
100% {box-shadow: inset 0 0 0 2em #cb72aa}

`;

const HeroButton = styled.button`
  background: none;
  border: 2px solid;
  font: inherit;
  line-height: 1;
  margin: 0.5em;
  padding: 1em 2em;
  color: ${(p) => p.theme.palette.primary.main};
  transition: 0.25s;
  &:hover {
    border-color: #ef8f6e;
    color: #fff;
    box-shadow: 0 0 0 2em rgba(255, 255, 255, 0);
    animation: ${Pulse} 1s;
    /* animation: ${Fill} 0.5s linear 1s; */
  }
`;

function HireButton() {
  return <HeroButton>Hire Me!</HeroButton>;
}

export default HireButton;
