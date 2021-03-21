import React from 'react';
import ExpandMoreTwoToneIcon from '@material-ui/icons/ExpandMoreTwoTone';
import { IconButton } from '@material-ui/core';
import styled, { keyframes } from 'styled-components';

const bounce = keyframes`
    0%   { transform: scale(1,1)      translateY(0); }
    10%  { transform: scale(1.1,.9)   translateY(0); }
    30%  { transform: scale(.9,1.1)   translateY(-10px); }
    50%  { transform: scale(1.05,.95) translateY(0); }
    57%  { transform: scale(1,1)      translateY(-7px); }
    64%  { transform: scale(1,1)      translateY(0); }
    100% { transform: scale(1,1)      translateY(0); }
`;

const BottomDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  flex-grow: 1;
  position: absolute;
  bottom: 5%;
  animation-name: ${bounce};
  :hover {
    color: ${(p) => p.theme.palette.secondary.light};
  }
  animation-duration: 1s;
  animation-iteration-count: infinite;
`;

function ScrollDown() {
  const ref = document.getElementById('about');
  const handleClick = () => {
    ref.scrollIntoView({
      behavior: 'smooth',
    });
  };

  return (
    <BottomDiv>
      <IconButton onClick={handleClick}>
        <ExpandMoreTwoToneIcon fontSize="large" />
      </IconButton>
    </BottomDiv>
  );
}

export default ScrollDown;
