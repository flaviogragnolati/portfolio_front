import { Box, ButtonBase, Typography } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';

// By far no the most efficent way of styling this 3 repating arrows...
// but couldnt manage to make it work with a single component :(
const color = (p) => p.theme.palette.secondary.main;
const height = '30px';

const ArrowOne = styled.div`
  position: absolute;
  left: 50%;
  transition: all 0.4s ease;
  &:before,
  &:after {
    transition: all 0.4s ease;
    content: '';
    display: block;
    position: absolute;
    transform-origin: bottom right;
    background: ${color};
    width: 5px;
    height: ${height};
    border-radius: 10px;
    transform: translate(-50%, -50%) rotateZ(-45deg);
  }
  &:after {
    transform-origin: bottom left;
    transform: translate(-50%, -50%) rotateZ(45deg);
  }
  opacity: 0.3;
  top: 35%;
`;
const ArrowTwo = styled.div`
  position: absolute;
  left: 50%;
  transition: all 0.4s ease;
  &:before,
  &:after {
    transition: all 0.4s ease;
    content: '';
    display: block;
    position: absolute;
    transform-origin: bottom right;
    background: ${color};
    width: 5px;
    height: ${height};
    border-radius: 10px;
    transform: translate(-50%, -50%) rotateZ(-45deg);
  }
  &:after {
    transform-origin: bottom left;
    transform: translate(-50%, -50%) rotateZ(45deg);
  }
  opacity: 0.6;
  top: 55%;
`;
const ArrowThree = styled.div`
  position: absolute;
  left: 50%;
  transition: all 0.4s ease;
  &:before,
  &:after {
    transition: all 0.4s ease;
    content: '';
    display: block;
    position: absolute;
    transform-origin: bottom right;
    background: ${color};
    width: 5px;
    height: ${height};
    border-radius: 10px;
    transform: translate(-50%, -50%) rotateZ(-45deg);
  }
  &:after {
    transform-origin: bottom left;
    transform: translate(-50%, -50%) rotateZ(45deg);
  }
  opacity: 0.9;
  top: 75%;
`;

const ArrowContainer = styled.div`
  display: block;
  margin-left: 0.7rem;
  width: 50px;
  height: 80px;
  transform: translate(-0%, 0%) rotateZ(0deg);
`;

const MoreText = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
`;

const HoverBox = styled(Box)`
  pointer-events: all;
  display: flex;
  /* border: blue 1px solid; */
  &:hover {
    cursor: pointer;
  }
  &:hover ${ArrowOne},&:hover ${ArrowTwo},&:hover ${ArrowThree} {
    top: 50%;
  }
  &:hover
    ${ArrowOne}:before,&:hover
    ${ArrowTwo}:before,&:hover
    ${ArrowThree}:before {
    transform: translate(-50%, -50%) rotateZ(-45deg);
  }
  &:hover
    ${ArrowOne}:after,&:hover
    ${ArrowTwo}:after,&:hover
    ${ArrowThree}:after {
    transform: translate(-50%, -50%) rotateZ(45deg);
  }
`;

function MoreAboutBtn({ BtnText }) {
  return (
    <Box display="flex" justifyContent="flex-end" flexGrow="1">
      <HoverBox>
        <ButtonBase focusRipple>
          <MoreText>
            <Typography variant="h6">{BtnText}</Typography>
          </MoreText>
          <ArrowContainer>
            <ArrowOne />
            <ArrowTwo />
            <ArrowThree />
          </ArrowContainer>
        </ButtonBase>
      </HoverBox>
    </Box>
  );
}

export default MoreAboutBtn;
