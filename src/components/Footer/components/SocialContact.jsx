import React from 'react';
import styled from 'styled-components';
import { Mail } from '@styled-icons/foundation';
import { Paper } from '@material-ui/core';
import { Github } from '@styled-icons/bootstrap';
import { SocialLinkedin } from '@styled-icons/foundation';

const SocialDiv = styled(Paper)`
  display: flex;
  flex-direction: row;
  transition: all 0.5s;
  justify-content: center;
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

  &:hover ${LinkedinIcon} {
    color: ${(p) => p.theme.palette.background.paper};
  }
`;

const GithubIcon = styled(Github)`
  position: relative;
  color: ${(p) => p.theme.palette.text.secondary};
  transition: 0.5s;
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
