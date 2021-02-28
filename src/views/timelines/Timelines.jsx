import React from 'react';
import { Grid } from '@material-ui/core';
import EducationTimeline from './components/EducationTimeline';
import WorkTimeline from './components/WorkTimeline';
import { useTanslation } from 'context/LangWrapper/useTranslation';

function Timelines() {
  const {
    MoreAbout: { subtitle },
  } = useTanslation();
  return (
    <Grid container>
      <Grid
        item
        container
        direction="row"
        justify="center"
        alignItems="center"
        flexGrow="1"
        xs={12}
      >
        <h2>{subtitle}</h2>
      </Grid>
      <Grid
        item
        container
        direction="column"
        justify="flex-start"
        alignItems="center"
        flexGrow="1"
        xs={12}
        md={6}
      >
        <EducationTimeline />
      </Grid>
      <Grid
        item
        container
        direction="column"
        justify="flex-start"
        alignItems="center"
        flexGrow="1"
        xs={12}
        md={6}
      >
        <WorkTimeline />
      </Grid>
    </Grid>
  );
}

export default Timelines;
