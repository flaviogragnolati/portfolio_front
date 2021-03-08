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
import styled from 'styled-components';
import { Grid } from '@material-ui/core';
import useScreenSize from 'utils/useScreenSize';

const iconProps = {
  padding: '5px',
  margin: '2rem',
  'border-radius': '10px',
  transition: '0.8s ease',
};
const iconHoverProps = {
  transition: ' 0.8s ease',
};

const Mongodb = styled(_Mongodb)`
  ${{ ...iconProps }};
  &:hover {
    color: #3fa037;
    background-color: #3f3e42;
    ${{ ...iconHoverProps }};
  }
`;
const Express = styled(_Express)`
  ${{ ...iconProps }};
  &:hover {
    color: white;
    background-color: #cd7871;
    ${{ ...iconHoverProps }};
  }
`;
const ReactLogo = styled(_ReactLogo)`
  ${{ ...iconProps }};
  &:hover {
    color: #61dbfb;
    background-color: #1f1f1f;
    ${{ ...iconHoverProps }};
  }
`;
const NodeDotJs = styled(_NodeDotJs)`
  ${{ ...iconProps }};
  &:hover {
    color: #3c873a;
    background-color: #303030;
    ${{ ...iconHoverProps }};
  }
`;
const Python = styled(_Python)`
  ${{ ...iconProps }};
  &:hover {
    color: #ffd43b;
    background-color: #646464;
    ${{ ...iconHoverProps }};
  }
`;
const Postgresql = styled(_Postgresql)`
  ${{ ...iconProps }};
  &:hover {
    color: #336791;
    background-color: #848484;
    ${{ ...iconHoverProps }};
  }
`;
const Django = styled(_Django)`
  ${{ ...iconProps }};
  &:hover {
    color: white;
    background-color: #103e2e;
    ${{ ...iconHoverProps }};
  }
`;

const Databases = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Backend = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Lang = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Frontend = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

function Stack() {
  const [mobile, tablet, desktop] = useScreenSize();

  let gridProps, iconProps;
  if (tablet || desktop) {
    gridProps = {
      container: true,
      item: true,
      direction: 'column',
      justify: 'center',
      alignItems: 'center',
      xs: 12,
      md: 3,
    };
    iconProps = { size: '6rem' };
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
        <Mongodb {...iconProps} />
        <Postgresql {...iconProps} />
      </Grid>
      <Grid {...gridProps}>
        <NodeDotJs {...iconProps} />
        <Python {...iconProps} />
      </Grid>
      <Grid {...gridProps}>
        <Express {...iconProps} />
        <Django {...iconProps} />
      </Grid>
      <Grid {...gridProps}>
        <ReactLogo {...iconProps} />
      </Grid>
    </>
  );
}

export default Stack;
