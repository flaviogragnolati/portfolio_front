import React from 'react';

// Custom Components
import { makeStyles, useMediaQuery } from '@material-ui/core';
import Sidebar from 'components/Sidebar';
import Main from 'views/main';
import About from 'views/about';
import useSpy from 'utils/observerHook';
import BackToTopBtn from 'components/BackToTop';
import Contact from 'views/contact';
import Section from 'components/Section';
import Skills from 'views/skills';
import Projects from 'views/projects';
import { useTranslation } from 'context/LangWrapper/useTranslation';
import Footer from 'components/Footer';
import useScreenSize from 'utils/useScreenSize';
import { defaults } from 'utils/config';
import styled from 'styled-components';
import TestWord from './TestWord';
const { sections } = defaults;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    position: 'relative',
  },
  // necessary for content to be below app bar
  // toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    position: 'relative',
    // paddingLeft: '10px',
  },
}));

const Div = styled.div`
  background-color: ${(p) => p.theme.main};
  position: absolute;
  top: 0;
  left: -220px;
  z-index: ${(p) => p.theme.zIndex.drawer + 100};
  width: 100vw;
  height: 100vh;
`;

const App = () => {
  const classes = useStyles();
  const { spyItems, nodeRefs } = useSpy();
  const { home, about, skills, projects, contact } = spyItems;
  const [mobile, tablet] = useScreenSize();

  const {
    Sidebar: { index },
  } = useTranslation();

  return (
    <div className={classes.root}>
      {/* {spyItems[sections[1]].inView && (
        <Sidebar ref={nodeRefs} spy={spyItems} />
      )} */}
      <Sidebar ref={nodeRefs} spy={spyItems} />

      <main className={classes.content}>
        <div id="top-anchor" />
        {/* <Div> */}
        <section id="home" title={index[0].text} ref={home.ref}>
          <Main id="home" ref={nodeRefs.about} />
        </section>
        {/* </Div> */}
        <Section id="about" title={index[1].text} ref={about.ref}>
          <About />
        </Section>
        <Section id="skills" title={index[2].text} ref={skills.ref}>
          <Skills />
        </Section>
        <Section id="projects" title={index[3].text} ref={projects.ref}>
          <Projects />
        </Section>
        <Section id="contact" title={index[4].text} ref={contact.ref}>
          <Contact />
        </Section>
        {/* <Section>
          <TestWord />
        </Section> */}
        {(mobile || tablet.low) && <Footer />}
        <BackToTopBtn />
      </main>
    </div>
  );
};

export default App;
