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
  /* justify-content: center; */
  /* align-items: center; */
`;

const LinkedinIcon = styled(Linkedin)`
  display: inline-block;
  position: relative;
  z-index: 1;
  width: 50px;
  height: 50px;
  border-radius: 15%;
  font-size: 24px;
  background-color: #f1f1f1;
  line-height: 52px;
  text-align: center;
  color: #48a65b;
  transition: all 0.5s;
  &:after {
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 25%;
    content: '';
    box-sizing: content-box;
  }
  &:hover {
    background-color: blue;
    color: red;
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
      <LinkedinIcon size="2rem" />
      <GithubIcon size="2rem" />
      <MailIcon size="2rem" />
    </SocialDiv>
  );
}

export default Social;
