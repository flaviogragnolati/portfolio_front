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

const Mongodb = styled(_Mongodb)`
  padding: 5px;
  margin: 1.2rem;
  border-radius: 10px;
  transition: 1s ease;
  &:hover {
    color: #3fa037;
    background-color: #3f3e42;
    transition: 0.8s ease;
  }
`;
const Express = styled(_Express)`
  padding: 5px;
  margin: 1.2rem;
  border-radius: 10px;
  transition: 1s ease;
  &:hover {
    color: white;
    background-color: #cd7871;
    transition: 0.8s ease;
  }
`;
const ReactLogo = styled(_ReactLogo)`
  padding: 5px;
  margin: 1.2rem;
  border-radius: 10px;
  transition: 1s ease;
  &:hover {
    color: #61dbfb;
    background-color: #1f1f1f;
    transition: 0.8s ease;
  }
`;
const NodeDotJs = styled(_NodeDotJs)`
  padding: 5px;
  margin: 1.2rem;
  border-radius: 10px;
  transition: 1s ease;
  &:hover {
    color: #3c873a;
    background-color: #303030;
    transition: 0.8s ease;
  }
`;
const Python = styled(_Python)`
  padding: 5px;
  margin: 1.2rem;
  border-radius: 10px;
  transition: 1s ease;
  &:hover {
    color: #ffd43b;
    background-color: #646464;
    transition: 0.8s ease;
  }
`;
const Postgresql = styled(_Postgresql)`
  padding: 5px;
  margin: 1.2rem;
  border-radius: 10px;
  transition: 1s ease;
  &:hover {
    color: #336791;
    background-color: #848484;
    transition: 0.8s ease;
  }
`;
const Django = styled(_Django)`
  padding: 5px;
  margin: 10px;
  border-radius: 10px;
  transition: 1s ease;
  &:hover {
    color: white;
    background-color: #103e2e;
    transition: 0.8s ease;
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
  return (
    // <Grid item direction="row" justify="center" alignItems="stretch">
    <>
      {/* <Wrapper> */}
      {/* <Grid item container xs={2}> */}
      <Databases>
        <Mongodb size="6rem" />
        <Postgresql size="6rem" />
      </Databases>
      {/* </Grid> */}
      {/* <Grid item container xs={2}> */}
      <Lang>
        <NodeDotJs size="6rem" />
        <Python size="6rem" />
      </Lang>
      {/* </Grid> */}
      {/* <Grid item container xs={2}> */}
      <Backend>
        <Express size="6rem" />
        <Django size="6rem" />
      </Backend>
      {/* </Grid> */}
      {/* <Grid item container xs={2}> */}
      <Frontend>
        <ReactLogo size="6rem" />
      </Frontend>
      {/* </Grid> */}
      {/* </Wrapper> */}
      {/* </Grid> */}
    </>
  );
}

export default Stack;
