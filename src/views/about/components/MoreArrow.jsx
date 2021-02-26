import React from 'react';
import styled from 'styled-components';

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
    background: blue;
    width: 5px;
    height: 50px;
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
    background: blue;
    width: 5px;
    height: 50px;
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
    background: blue;
    width: 5px;
    height: 50px;
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
  width: 100px;
  height: 100px;
  transform: translate(-50%, -50%) rotateZ(0deg);
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

function MoreArrow() {
  return (
    <>
      <ArrowContainer>
        <ArrowOne />
        <ArrowTwo />
        <ArrowThree />
      </ArrowContainer>
    </>
  );
}

export default MoreArrow;
