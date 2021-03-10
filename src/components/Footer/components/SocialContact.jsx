import React from 'react';
import styled from 'styled-components';
import { Mail } from '@styled-icons/foundation';
import { Paper } from '@material-ui/core';
import { Github } from '@styled-icons/bootstrap';
import { SocialLinkedin } from '@styled-icons/foundation';

// const old = `width: 100%;
//   height: 100%;
//   text-align: center;
//   border-radius: 5%;
//   position: relative;
//   overflow: hidden;
//   transition: 0.5s;
//   padding: 10px;
//   cursor: pointer;
//   &:before {
//     content: '';
//     position: absolute;
//     top: 100%;
//     left: 0;
//     width: 100%;
//     height: 100%;
//     background: ${(p) => p.theme.palette.primary.light};
//     transition: 0.5s;
//   }
//   &:hover:before {
//     top: 0;
//   }

//   &:hover ${LinkedinIcon} {
//     color: ${(p) => p.theme.palette.background.paper};
//   }`;

const divProps = {
  position: 'relative',
  overflow: 'hidden',
  width: ' 100%',
  height: ' 100%',
  'text-align': 'center',
  'border-radius': '5%',
  padding: '10px',
  transition: '0.8s ease',
  cursor: 'pointer',
};

const SocialDiv = styled.div`
  background: ${(p) => p.theme.palette.background.paper};
  border: 2px solid ${(p) => p.theme.palette.primary.light};
  border-radius: 5px;
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
  ${{ ...divProps }}
  color: ${(p) => p.theme.palette.primary.contrastText};
  &:hover {
    box-shadow: inset 0 0 0 3rem ${(p) => p.theme.palette.primary.light};
    border-color: ${(p) => p.theme.palette.primary.dark};
    color: ${(p) => p.theme.palette.primary.contrastText};
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
  ${{ ...divProps }}
  color: ${(p) => p.theme.palette.primary.contrastText};
  &:hover {
    box-shadow: inset 0 0 0 3rem ${(p) => p.theme.palette.primary.light};
    border-color: ${(p) => p.theme.palette.primary.dark};
    color: ${(p) => p.theme.palette.primary.contrastText};
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
  ${{ ...divProps }}
  color: ${(p) => p.theme.palette.primary.contrastText};
  &:hover {
    box-shadow: inset 0 0 0 3rem ${(p) => p.theme.palette.primary.light};
    border-color: ${(p) => p.theme.palette.primary.dark};
    color: ${(p) => p.theme.palette.primary.contrastText};
  }
  &:hover ${MailIcon} {
    color: ${(p) => p.theme.palette.background.paper};
  }
`;

function Social({ links }) {
  const { linkedin, github, mail, subject } = links;
  return (
    <SocialDiv variant="outlined">
      <LinkedinDiv>
        <a href={linkedin}>
          <LinkedinIcon size="2.5rem" />
        </a>
      </LinkedinDiv>
      <GitDiv>
        <a href={github}>
          <GithubIcon size="2.4rem" />
        </a>
      </GitDiv>
      <MailDiv>
        <a
          // onClick={`javascript:window.open('mailto:${mail}?subject=${subject}', 'mail');event.preventDefault()`}
          target="_blank"
          rel="noreferrer"
          href={`mailto:${mail}?subject=${subject}`}
        >
          <MailIcon size="2.5rem" />
        </a>
      </MailDiv>
    </SocialDiv>
  );
}

export default Social;
