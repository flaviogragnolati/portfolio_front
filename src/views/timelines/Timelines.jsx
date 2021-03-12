import React from 'react';
import { Box, Grid, Typography } from '@material-ui/core';
import EducationTimeline from './components/EducationTimeline';
import WorkTimeline from './components/WorkTimeline';
import { useTranslation } from 'context/LangWrapper/useTranslation';
import LessAboutBtn from 'views/about/components/LessAboutBtn';

function Timelines({ setExpanded }) {
  const {
    MoreAbout: { subtitle, lessBtn },
  } = useTranslation();

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
        <Typography variant="h3" gutterBottom>
          {subtitle}
        </Typography>
      </Grid>
      <Grid
        item
        container
        direction="column"
        justify="flex-start"
        alignItems="center"
        flexGrow={1}
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
      <Grid item xs={12}>
        <Box mt={2}>
          <LessAboutBtn
            BtnText={lessBtn}
            onClick={() => setExpanded((prevState) => !prevState)}
          />
        </Box>
      </Grid>
    </Grid>
  );
}

export default Timelines;
