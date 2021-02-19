import React, { createRef, useEffect, useState } from 'react';
import styled from 'styled-components';

// Custom Components
import { makeStyles, Typography } from '@material-ui/core';
import Sidebar from 'components/sidebar';
import Main from 'views/main';
import About from 'views/about';
import useSpy from 'utils/observerHook';
import { defaults } from 'utils/config';

const TestThemeDiv = styled.div`
  background-color: ${(p) => p.theme.palette.primary.main};
  color: ${(p) => p.theme.palette.primary.contrastText};
`;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  // necessary for content to be below app bar
  // toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
  },
}));

const App = () => {
  const classes = useStyles();
  const { spyItems, nodeRefs } = useSpy();
  const { home, about, services, projects, contact } = spyItems;

  return (
    <div className={classes.root}>
      <Sidebar ref={nodeRefs} spy={spyItems} />
      <main className={classes.content}>
        <div />
        <section id="home" ref={home.ref}>
          <Main id="home" />
        </section>
        <section id="about" ref={about.ref}>
          <h1>ABOUT</h1>
          <About />
          <About />
          <About />
          <About />
        </section>
        <section id="services" ref={services.ref}>
          <div>
            <h1>SERVICES</h1>
            <About />
            <About />
            <About />
            <About />
          </div>
        </section>
        <section id="projects" ref={projects.ref}>
          <div>
            <h1>PROJECTS</h1>
            <About />
            <About />
            <About />
            <About />
          </div>
        </section>
        <section id="contact" ref={contact.ref}>
          <h1>CONTACT</h1>
          <About />
          <About />
          <About />
          <About />
        </section>
      </main>
    </div>
  );
};

export default App;
