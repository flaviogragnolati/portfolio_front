import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Linkedin, GithubSquare } from '@styled-icons/fa-brands';
import { Mail } from '@styled-icons/foundation';

const SocialDiv = styled.div`
  display: flex;
  position: absolute;
  right: 1rem;
  flex-direction: column;
  transition: all 0.5s;
  backgroung-color: red;
  padding: 2rem;
  /* justify-content: center; */
  /* align-items: center; */
`;

const LinkedinIcon = styled(Linkedin)`
  /* display: inline-block;
  position: relative; */
  z-index: 1;
  width: 50px;
  height: 50px;
  border-radius: 15%;
  /* font-size: 24px; */
  color: white;
  /* line-height: 52px; */
  text-align: center;
  background-color: ${(p) => p.theme.palette.primary.main};
  transition: all 0.5s;
  &:after {
    /* position: absolute; */
    width: 100%;
    height: 100%;
    /* border-radius: 15%; */
    content: '';
    box-sizing: content-box;
    top: -7px;
    left: -7px;
    padding: 7px;
    box-shadow: 0 0 0 20px ${(p) => p.theme.palette.secondary.main};
    transition: all 0.5s;
    transform: scale(0.8);
    opacity: 0;
  }
  &:hover {
    background-color: ${(p) => p.theme.palette.secondary.main};
    color: ${(p) => p.theme.palette.primary.main};
  }
  &:hover:after {
    transform: scale(1);
    opacity: 1;
  }
`;

const icon3d = (p) => keyframes`
 0% {
    box-shadow: 5px 4px black, -5px -6px red ;
  }
  25% {
    box-shadow: -5px -6px black, 5px 4px red ;
  }
  50% {
    box-shadow: 5px -4px black, -8px 4px red ;
  }
  75% {
    box-shadow: -8px -4px black, -5px -4px red ;
  }
  100% {
    box-shadow: -5px 0 black, 5px -4px red ;
  }
`;
const GithubIcon = styled(GithubSquare)`
  /* padding: 10px; */
  /* animation-name: ${icon3d};
  animation-duration: 1000s;
  animation-iteration-count: infinite; */
  color: green;
  &:hover {
    border-radius: 5%;
    animation: ${(p) => icon3d(p.theme)} 1000ms linear infinite;
    /* animation-name: ${icon3d};
    animation-duration: 200s;
    animation-iteration-count: infinite; */
  }
`;

const MailIcon = styled(Mail)`
  position: relative;
  color: #262626;
  transition: 0.5s;
  z-index: 3;
`;
const MailDiv = styled.div`
  width: 100px;
  height: 100px;
  background-color: #fff;
  text-align: center;
  border-radius: 5%;
  position: relative;
  overflow: hidden;
  border: 3px solid #red;
  color: #262626;
  transition: 0.5s;
  &:before {
    content: '';
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${(p) => p.theme.palette.primary.light};
    transition: 0.5s;
  }
  &:hover:before {
    top: 0;
  }
  &:hover ${MailIcon} {
    color: #fff;
  }
`;

function Social() {
  return (
    <SocialDiv>
      <LinkedinIcon size="2.5rem" />
      <GithubIcon size="5rem" />
      <MailDiv>
        <MailIcon size="5rem" />
      </MailDiv>
    </SocialDiv>
  );
}

export default Social;
