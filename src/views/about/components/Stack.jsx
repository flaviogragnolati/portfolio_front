import React from 'react';
import {
  Mongodb as _Mongodb,
  Express as _Express,
  ReactLogo as _ReactLogo,
  NodeDotJs as _NodeDotJs,
  Python as _Python,
  Postgresql as _Postgresql,
  Django as _Django,
  Docker as _Docker,
} from '@styled-icons/simple-icons';
import styled, { css } from 'styled-components';
import { Grid, Tooltip } from '@material-ui/core';
import useScreenSize from 'utils/useScreenSize';
import { useTranslation } from 'context/LangWrapper/useTranslation';

const iconStyle = {
  padding: '5px',
  margin: '2rem',
  'border-radius': '10px',
  transition: '0.8s ease',
};
const iconHoverProps = {
  transition: ' 0.8s ease',
};

const Mongodb = styled(_Mongodb)`
  ${(p) =>
    p.theme.themeName === 'light' &&
    css`
      color: ${(p) => p.theme.palette.text.secondary};
    `};
  ${{ ...iconStyle }};
  &:hover {
    color: #3fa037;
    background-color: #3f3e42;
    ${{ ...iconHoverProps }};
  }
`;
const Express = styled(_Express)`
  ${(p) =>
    p.theme.themeName === 'light' &&
    css`
      color: ${(p) => p.theme.palette.text.secondary};
    `};
  ${{ ...iconStyle }};
  &:hover {
    color: white;
    background-color: #cd7871;
    ${{ ...iconHoverProps }};
  }
`;
const ReactLogo = styled(_ReactLogo)`
  ${(p) =>
    p.theme.themeName === 'light' &&
    css`
      color: ${(p) => p.theme.palette.text.secondary};
    `};
  ${{ ...iconStyle }};
  &:hover {
    color: #61dbfb;
    background-color: #1f1f1f;
    ${{ ...iconHoverProps }};
  }
`;
const NodeDotJs = styled(_NodeDotJs)`
  ${(p) =>
    p.theme.themeName === 'light' &&
    css`
      color: ${(p) => p.theme.palette.text.secondary};
    `};
  ${{ ...iconStyle }};
  &:hover {
    color: #3c873a;
    background-color: #303030;
    ${{ ...iconHoverProps }};
  }
`;
const Python = styled(_Python)`
  ${(p) =>
    p.theme.themeName === 'light' &&
    css`
      color: ${(p) => p.theme.palette.text.secondary};
    `};
  ${{ ...iconStyle }};
  &:hover {
    color: #ffd43b;
    background-color: #646464;
    ${{ ...iconHoverProps }};
  }
`;
const Postgresql = styled(_Postgresql)`
  ${(p) =>
    p.theme.themeName === 'light' &&
    css`
      color: ${(p) => p.theme.palette.text.secondary};
    `};
  ${{ ...iconStyle }};
  &:hover {
    color: #336791;
    background-color: #848484;
    ${{ ...iconHoverProps }};
  }
`;
const Django = styled(_Django)`
  ${(p) =>
    p.theme.themeName === 'light' &&
    css`
      color: ${(p) => p.theme.palette.text.secondary};
    `};
  ${{ ...iconStyle }};
  &:hover {
    color: white;
    background-color: #103e2e;
    ${{ ...iconHoverProps }};
  }
`;
const Frame = styled.div`
  border: 2px red solid;
  width: 1584px;
  height: 396px;
  display: flex;
`;

function Stack() {
  const { mobile, tablet, desktop } = useScreenSize();
  const {
    About: {
      stackTooltip: { mongo, pg, js, py, ex, dj, react },
    },
  } = useTranslation();
  let gridProps, iconProps;
  if (desktop) {
    gridProps = {
      container: true,
      item: true,
      direction: 'column',
      justify: 'center',
      alignItems: 'center',
      md: 3,
    };
    iconProps = { size: '6rem' };
  } else if (tablet.all) {
    gridProps = {
      container: true,
      item: true,
      direction: 'column',
      justify: 'center',
      alignItems: 'center',
      sm: 3,
    };
    iconProps = { size: '4.5rem' };
  } else if (mobile) {
    gridProps = {
      container: true,
      item: true,
      direction: 'row',
      justify: 'center',
      alignItems: 'center',
      xs: 12,
    };
    iconProps = { size: '4rem' };
  }

  return (
    <>
      <Grid {...gridProps}>
        <Tooltip title={mongo}>
          <Mongodb {...iconProps} />
        </Tooltip>
        <Tooltip title={pg}>
          <Postgresql {...iconProps} />
        </Tooltip>
      </Grid>
      <Grid {...gridProps}>
        <Tooltip title={js}>
          <NodeDotJs {...iconProps} />
        </Tooltip>
        <Tooltip title={py}>
          <Python {...iconProps} />
        </Tooltip>
      </Grid>
      <Grid {...gridProps}>
        <Tooltip title={ex}>
          <Express {...iconProps} />
        </Tooltip>
        <Tooltip title={dj}>
          <Django {...iconProps} />
        </Tooltip>
      </Grid>
      <Grid {...gridProps}>
        <Tooltip title={react}>
          <ReactLogo {...iconProps} />
        </Tooltip>
      </Grid>
    </>
  );
}

export default Stack;
