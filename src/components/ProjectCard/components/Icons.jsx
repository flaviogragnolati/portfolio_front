import React from 'react';
import { Tooltip } from '@material-ui/core';
import { Code as _Code } from '@styled-icons/fa-solid';
import { Preview as _Preview } from '@styled-icons/material-outlined';
import { OpenInBrowser as _OpenInBrowser } from '@styled-icons/material';

import styled from 'styled-components';
import { useTranslation } from 'context/LangWrapper/useTranslation';

const StyledDiv = styled.div`
  display: flex;
  flex-drection: row;
  flex-grow: 1;
  justify-content: flex-end;
`;

const Code = styled(_Code)`
  color: ${(p) => p.theme.palette.text.secondary};
  cursor: pointer;
  margin-left: 1rem;
  transition: 0.3s ease;
  &:hover {
    color: ${(p) => p.theme.palette.secondary.dark};
  }
`;

const Preview = styled(_Preview)`
  color: ${(p) => p.theme.palette.text.secondary};
  margin-left: 1rem;
  cursor: pointer;
  transition: 0.3s ease;
  &:hover {
    color: ${(p) => p.theme.palette.secondary.dark};
  }
`;
const OpenInBrowser = styled(_OpenInBrowser)`
  color: ${(p) => p.theme.palette.text.secondary};
  cursor: pointer;
  margin-left: 1rem;
  transition: 0.3s ease;
  &:hover {
    color: ${(p) => p.theme.palette.secondary.dark};
  }
`;

function Icons({ git, website, ...rest }) {
  const {
    Projects: {
      tooltip: { codeTooltip, webTooltip, previewTooltip },
    },
  } = useTranslation();
  return (
    <StyledDiv {...rest}>
      <Tooltip title={codeTooltip}>
        <a href={git}>
          <Code size="2.5rem" />
        </a>
      </Tooltip>
      <Tooltip title={webTooltip}>
        <a href={git}>
          <OpenInBrowser size="2.5rem" />
        </a>
      </Tooltip>
      <Tooltip title={previewTooltip}>
        <a>
          <Preview size="2.5rem" />
        </a>
      </Tooltip>
    </StyledDiv>
  );
}

export default Icons;
