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

  return (
    <div className={classes.root}>
      <Sidebar ref={nodeRefs} spy={spyItems} />

      <main className={classes.content}>
        <div id="top-anchor" />
        <section id="home" ref={home.ref}>
          <Main id="home" ref={nodeRefs.about} />
        </section>
        <Section id="about" title="about" ref={about.ref}>
          <About />
        </Section>
        <Section id="skills" title="skills" ref={skills.ref}>
          <Skills />
        </Section>
        <Section id="projects" title="projects" ref={projects.ref}>
          <Projects />
        </Section>
        <Section id="contact" title="contact" ref={contact.ref}>
          <Contact />
        </Section>
        {/* <Social /> */}
        <BackToTopBtn />
      </main>
    </div>
  );
};

export default App;
