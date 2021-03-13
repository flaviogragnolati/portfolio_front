import React, { createRef, useEffect, useReducer, useState } from 'react';

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
import styled from 'styled-components';
import { useInView } from 'react-intersection-observer';
import { fakeRequest } from 'utils/helpers';

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
  const {
    Sidebar: { index },
  } = useTranslation();
  const classes = useStyles();
  const [isLoading, setLoading] = useState(true);
  const [mobile, tablet] = useScreenSize();
  const { spyItems, nodeRefs } = useSpy();
  const { home, about, skills, projects, contact } = spyItems;

  useEffect(() => {
    fakeRequest().then(() => {
      const el = document.querySelector('.loader-container');
      if (el) {
        el.remove();
        setLoading(!isLoading);
      }
    });
  }, []);

  // const reducer = (state, action) => {
  //   switch (action.type) {
  //     case 'set':
  //       return (state = action.payload);
  //     default:
  //       throw new Error('not a reducer aciont');
  //   }
  // };
  // const [currentSection, setCurrentSection] = useReducer(reducer, 'home');

  // const refs = index.reduce((refsObj, section) => {
  //   refsObj[section.id] = createRef();
  //   return refsObj;
  // }, {});

  if (isLoading) {
    return null;
  }

  return (
    <div className={classes.root}>
      <Sidebar spy={spyItems} />
      <main className={classes.content}>
        <div id="top-anchor" />
        <section
          id="home"
          title={index[0].text}
          // currentSection={currentSection}
          // setCurrentSection={setCurrentSection}
          ref={home.ref}
          // ref={homeRef}
        >
          <Main
          // id="home"
          // ref={nodeRefs.about}
          />
        </section>
        {/* <div ref={about.ref} /> */}
        <Section
          id="about"
          title={index[1].text}
          // currentSection={currentSection}
          // setCurrentSection={setCurrentSection}
          // refs={refs}

          ref={about.ref}
        >
          <About />
        </Section>
        {/* <div ref={skills.ref} /> */}
        <Section
          id="skills"
          title={index[2].text}
          // currentSection={currentSection}
          // setCurrentSection={setCurrentSection}
          // refs={refs}

          ref={skills.ref}
        >
          <Skills />
        </Section>
        <Section
          id="projects"
          title={index[3].text}
          // currentSection={currentSection}
          // setCurrentSection={setCurrentSection}
          // refs={refs}

          ref={projects.ref}
        >
          <Projects />
        </Section>

        <Section
          id="contact"
          title={index[4].text}
          // currentSection={currentSection}
          // setCurrentSection={setCurrentSection}
          // refs={refs}

          ref={contact.ref}
        >
          <Contact />
        </Section>
        {(mobile || tablet.low) && <Footer />}
        <BackToTopBtn />
      </main>
    </div>
  );
};

export default App;
