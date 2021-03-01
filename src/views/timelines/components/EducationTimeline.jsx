import React from 'react';
import VerticalTimelineComponent from 'components/VerticalTimeline';
import 'components/VerticalTimeline/VerticalTimeline.css';
import 'components/VerticalTimeline/VerticalTimelineElement.css';
import { NetworkChart } from '@styled-icons/boxicons-regular/NetworkChart';
import { Star } from '@styled-icons/boxicons-regular/Star';
import styled from 'styled-components';
import { Box, Grid, Typography } from '@material-ui/core';
import { useTranslation } from 'context/LangWrapper/useTranslation';
import useFullTheme from 'context/ThemeWrapper/useFullTheme';
const { VerticalTimeline, VerticalTimelineElement } = VerticalTimelineComponent;

const JobTitle = styled.h4`
  font-size: 1.5rem;
  color: ${(p) => p.theme.palette.primary.light};
`;

const Company = styled.h5`
  font-size: 1rem;
  color: ${(p) => p.theme.palette.text.primary};
`;

function EducationTimeline() {
  const {
    MoreAbout: { education, educationTitle },
  } = useTranslation();
  const t = useFullTheme();
  return (
    <Grid container direction="column" justify="flex-start" alignItems="center">
      <Grid item xs={12}>
        <h3>{educationTitle}</h3>
      </Grid>
      <Grid item>
        <VerticalTimeline>
          {education.map(({ school, title, type, date, description }) => (
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
                background: t.palette.primary.main,
                color: '#fff',
              }}
              icon={<NetworkChart />}
            >
              <JobTitle>{title}</JobTitle>
              <Company>{school}</Company>
              <Company>{type}</Company>
              <Typography variant="body2" gutterBottom>
                {description}
              </Typography>
            </VerticalTimelineElement>
          ))}
          <VerticalTimelineElement
            iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
            icon={<Star />}
          />
        </VerticalTimeline>
      </Grid>
    </Grid>
  );
}

export default EducationTimeline;
