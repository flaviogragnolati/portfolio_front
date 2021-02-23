import React from 'react';
import styled from 'styled-components';
import { Linkedin, GithubSquare } from '@styled-icons/fa-brands';
import { Mail } from '@styled-icons/foundation';

const SocialDiv = styled.div`
  display: flex;
  position: absolute;
  right: 1rem;
  flex-direction: column;
  /* justify-content: center; */
  /* align-items: center; */
`;

const LinkedinIcon = styled(Linkedin)`
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
