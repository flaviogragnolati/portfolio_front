import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Linkedin, GithubSquare } from '@styled-icons/fa-brands';
import { Mail } from '@styled-icons/foundation';
import { Paper } from '@material-ui/core';
import { Github } from '@styled-icons/bootstrap';
import { SocialLinkedin } from '@styled-icons/foundation';

const SocialDiv = styled(Paper)`
  display: flex;
  position: absolute;
  right: 0;
  flex-direction: column;
  transition: all 0.5s;
`;

// const LinkedinIcon = styled(Linkedin)`
//   /* display: inline-block;
//   position: relative; */
//   z-index: 1;
//   width: 50px;
//   height: 50px;
//   border-radius: 15%;
//   /* font-size: 24px; */
//   color: white;
//   /* line-height: 52px; */
//   text-align: center;
//   background-color: ${(p) => p.theme.palette.primary.main};
//   transition: all 0.5s;
//   &:after {
//     /* position: absolute; */
//     width: 100%;
//     height: 100%;
//     /* border-radius: 15%; */
//     content: '';
//     box-sizing: content-box;
//     top: -7px;
//     left: -7px;
//     padding: 7px;
//     box-shadow: 0 0 0 20px ${(p) => p.theme.palette.secondary.main};
//     transition: all 0.5s;
//     transform: scale(0.8);
//     opacity: 0;
//   }
//   &:hover {
//     background-color: ${(p) => p.theme.palette.secondary.main};
//     color: ${(p) => p.theme.palette.primary.main};
//   }
//   &:hover:after {
//     transform: scale(1);
//     opacity: 1;
//   }
// `;

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

const LinkedinIcon = styled(SocialLinkedin)`
  position: relative;
  color: ${(p) => p.theme.palette.text.secondary};
  transition: 0.5s;
  }
`;
const LinkedinDiv = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;
  border-radius: 5%;
  position: relative;
  overflow: hidden;
  transition: 0.5s;
  padding: 10px;
  cursor: pointer;
  &:before {
    content: '';
    position: absolute;
    left: 100%;
    bottom: 0;
    width: 100%;
    height: 100%;
    background: ${(p) => p.theme.palette.primary.light};
    transition: 0.5s;
  }
  &:hover:before {
    left: 0;
  }
  /* &:before {
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
  } */
  &:hover ${LinkedinIcon} {
    color: ${(p) => p.theme.palette.background.paper};
  }
`;

const GithubIcon = styled(Github)`
  position: relative;
  color: ${(p) => p.theme.palette.text.secondary};
  transition: 0.5s;
  /* padding: 10px; */
  /* animation-name: ${icon3d};
  animation-duration: 1000s;
  animation-iteration-count: infinite; */
  /* color: green;
  &:hover {
    border-radius: 5%;
    animation: ${(p) => icon3d(p.theme)} 1000ms linear infinite; */
    /* animation-name: ${icon3d};
    animation-duration: 200s;
    animation-iteration-count: infinite; */
  }
`;
const GitDiv = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;
  border-radius: 5%;
  position: relative;
  overflow: hidden;
  padding: 10px;
  transition: 0.5s;
  cursor: pointer;
  &:before {
    content: '';
    position: absolute;
    left: 100%;
    bottom: 0;
    width: 100%;
    height: 100%;
    background: ${(p) => p.theme.palette.primary.light};
    transition: 0.5s;
  }
  &:hover:before {
    left: 0;
  }
  &:hover ${GithubIcon} {
    color: ${(p) => p.theme.palette.background.paper};
  }
`;

const MailIcon = styled(Mail)`
  position: relative;
  color: ${(p) => p.theme.palette.text.secondary};
  transition: 0.5s;
`;
const MailDiv = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;
  border-radius: 5%;
  position: relative;
  overflow: hidden;
  padding: 10px;
  transition: 0.5s;
  cursor: pointer;
  &:before {
    content: '';
    position: absolute;
    left: 100%;
    bottom: 0;
    width: 100%;
    height: 100%;
    background: ${(p) => p.theme.palette.primary.light};
    transition: 0.5s;
  }
  &:hover:before {
    left: 0;
  }
  &:hover ${MailIcon} {
    color: ${(p) => p.theme.palette.background.paper};
  }
`;

function Social() {
  return (
    <SocialDiv variant="outlined">
      <LinkedinDiv>
        <LinkedinIcon size="2.5rem" />
      </LinkedinDiv>
      <GitDiv>
        <GithubIcon size="2.4rem" />
      </GitDiv>
      <MailDiv>
        <MailIcon size="2.5rem" />
      </MailDiv>
    </SocialDiv>
  );
}

export default Social;
