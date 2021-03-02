import React from 'react';
import styled from 'styled-components';
import { Linkedin, GithubSquare } from '@styled-icons/fa-brands';
import { Mail } from '@styled-icons/foundation';

const SocialDiv = styled.div`
  display: flex;
  position: absolute;
  right: 1rem;
  flex-direction: column;
  transition: all 0.5s;
  backgroung-color: red;
  /* justify-content: center; */
  /* align-items: center; */
`;

const LinkedinIcon = styled(Linkedin)`
  display: inline-block;
  position: relative;
  z-index: 1;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  font-size: 24px;
  color: white;
  line-height: 52px;
  text-align: center;
  background-color: green;
  transition: all 0.5s;
  &:after {
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    content: '';
    box-sizing: content-box;
    top: -7px;
    left: -7px;
    padding: 7px;
    box-shadow: 0 0 0 4px white;
    transition: all 0.5s;
    transform: scale(0.8);
    opacity: 0;
  }
  &:hover {
    background-color: white;
    color: green;
  }
  &:hover:after {
    transform: scale(1);
    opacity: 1;
  }
`;

const GithubIcon = styled(GithubSquare)`
  &:hover {
    background-color: blue;
    color: red;
  }
`;
const MailIcon = styled(Mail)`
  &:hover {
    background-color: blue;
    color: red;
  }
`;

function Social() {
  return (
    <SocialDiv>
      <LinkedinIcon size="2.5rem" />
      <GithubIcon size="2rem" />
      <MailIcon size="2rem" />
    </SocialDiv>
  );
}

export default Social;
