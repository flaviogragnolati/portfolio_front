import React from 'react';
import { Grid } from '@material-ui/core';

import EndPhrase from './components/EndPhrase';
import ProjectCarrousel from './components/ProjectCarrousel';
import { useTranslation } from 'context/LangWrapper/useTranslation';

function Projects() {
  const {
    Projects: { endphrase, projects },
  } = useTranslation();

  return (
    <>
      <Grid item container>
        <ProjectCarrousel projects={projects} />
      </Grid>
      <Grid container item xs={12}>
        <EndPhrase text={endphrase} />
      </Grid>
    </>
  );
}

export default Projects;
