import React, { createRef, useEffect, useReducer, useState } from 'react';

// Custom Components
import { makeStyles } from '@material-ui/core';
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

const App = () => {
  const {
    Sidebar: { index },
  } = useTranslation();

  const classes = useStyles();
  const [isLoading, setLoading] = useState(true);
  const { mobile, tablet } = useScreenSize();
  // const { spyItems, nodeRefs } = useSpy();
  // const { home, about, skills, projects, contact } = spyItems;

  useEffect(() => {
    fakeRequest().then(() => {
      const el = document.querySelector('.loader-container');
      if (el) {
        el.remove();
        setLoading(!isLoading);
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isLoading) {
    return null;
  }

  return (
    <div className={classes.root}>
      <Sidebar
      // spy={spyItems}
      />
      <main className={classes.content}>
        <div id="top-anchor" />
        <section
          id="home"
          title={index[0].text}
          // ref={home.ref}
        >
          <Main />
        </section>

        <Section
          id="about"
          title={index[1].text}
          // ref={about.ref}
        >
          <About />
        </Section>
        <Section
          id="skills"
          title={index[2].text}
          // ref={skills.ref}
        >
          <Skills />
        </Section>
        <Section
          id="projects"
          title={index[3].text}
          // ref={projects.ref}
        >
          <Projects />
        </Section>
        <Section
          id="contact"
          title={index[4].text}
          // ref={contact.ref}
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
