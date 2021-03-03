import React from 'react';

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
import Social from 'views/main/components/Social';
import { useTranslation } from 'context/LangWrapper/useTranslation';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  // necessary for content to be below app bar
  // toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    paddingLeft: '10px',
  },
}));

const App = () => {
  const classes = useStyles();
  const { spyItems, nodeRefs } = useSpy();
  const { home, about, skills, projects, contact } = spyItems;
  const {
    Sidebar: { index },
  } = useTranslation();

  return (
    <div className={classes.root}>
      <Sidebar ref={nodeRefs} spy={spyItems} />

      <main className={classes.content}>
        <div id="top-anchor" />
        <section id="home" title={index[0].text} ref={home.ref}>
          <Main id="home" ref={nodeRefs.about} />
        </section>
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
        {/* <Social /> */}
        <BackToTopBtn />
      </main>
    </div>
  );
};

export default App;
