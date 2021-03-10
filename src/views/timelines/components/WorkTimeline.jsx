import React from 'react';
import VerticalTimelineComponent from 'components/VerticalTimeline';
import 'components/VerticalTimeline/VerticalTimeline.css';
import 'components/VerticalTimeline/VerticalTimelineElement.css';
import { NetworkChart } from '@styled-icons/boxicons-regular/NetworkChart';
import { FlagCheckered } from 'styled-icons/boxicons-solid';
import { WorkOutline } from 'styled-icons/material-outlined';
import styled from 'styled-components';
import { Box, Grid, Typography } from '@material-ui/core';
import { useTranslation } from 'context/LangWrapper/useTranslation';
import useFullTheme from 'context/ThemeWrapper/useFullTheme';
const { VerticalTimeline, VerticalTimelineElement } = VerticalTimelineComponent;

const JobTitle = styled(Typography)`
  color: ${(p) => p.theme.palette.secondary.light};
`;

const Company = styled(Typography)`
  color: ${(p) => p.theme.palette.text.primary};
`;

function WorkTimeline() {
  const {
    MoreAbout: { work, workTitle },
  } = useTranslation();
  const t = useFullTheme();
  return (
    <Grid container direction="column" justify="flex-start" alignItems="center">
      <Grid item xs={12}>
        <Typography variant="h4" gutterBottom>
          {workTitle}
        </Typography>
      </Grid>
      <Grid item>
        <VerticalTimeline>
          {work.map(
            ({ company, sector, website, position, date, description }) => (
              <VerticalTimelineElement
                contentStyle={{
                  background: t.palette.background.default,
                  boxShadow: t.shadows[3],
                }}
                contentArrowStyle={{
                  borderRight: `11px solid  ${t.palette.background.paper}`,
                }}
                date={date}
                dateStyle={{ color: t.palette.text.primary }}
                iconStyle={{
                  background: t.palette.secondary.main,
                  color: '#fff',
                }}
                icon={<WorkOutline />}
              >
                <JobTitle variant="h5">{position}</JobTitle>
                <Company variant="h6">{company}</Company>
                <Company variant="caption">{sector}</Company>
                <Typography variant="body2" gutterBottom>
                  {description}
                </Typography>
              </VerticalTimelineElement>
            )
          )}
          <VerticalTimelineElement
            iconStyle={{
              backgroundColor: t.palette.secondary.ligth,
              color: '#fff',
            }}
            icon={<FlagCheckered />}
          />
        </VerticalTimeline>
      </Grid>
    </Grid>
  );
}

export default WorkTimeline;
