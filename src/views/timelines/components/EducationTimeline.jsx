import React from 'react';
import VerticalTimelineComponent from 'components/VerticalTimeline';
import 'components/VerticalTimeline/VerticalTimeline.css';
import 'components/VerticalTimeline/VerticalTimelineElement.css';
import { FlagCheckered } from 'styled-icons/boxicons-solid';
import { NetworkChart } from '@styled-icons/boxicons-regular/NetworkChart';
import { School } from 'styled-icons/ionicons-outline';
import { Award, Star, CodeCurly } from 'styled-icons/boxicons-regular';
import { University } from 'styled-icons/fa-solid';
import styled from 'styled-components';
import { Box, Grid, Typography } from '@material-ui/core';
import { useTranslation } from 'context/LangWrapper/useTranslation';
import useFullTheme from 'context/ThemeWrapper/useFullTheme';

const { VerticalTimeline, VerticalTimelineElement } = VerticalTimelineComponent;

const JobTitle = styled(Typography)`
  color: ${(p) => p.theme.palette.primary.light};
`;

const Institution = styled(Typography)`
  color: ${(p) => p.theme.palette.text.primary};
`;
const Type = styled(Typography)`
  color: ${(p) => p.theme.palette.text.secondary};
`;

const iconSelector = (icon) => {
  switch (icon) {
    case 'award':
      return <Award />;
    case 'university':
      return <University />;
    case 'course':
      return <School />;
    case 'bootcamp':
      return <CodeCurly />;
    default:
      break;
  }
};

function EducationTimeline() {
  const {
    MoreAbout: { education, educationTitle },
  } = useTranslation();
  const t = useFullTheme();
  return (
    <Grid container direction="column" justify="flex-start" alignItems="center">
      <Grid item xs={12}>
        <Typography variant="h4" gutterBottom>
          {educationTitle}
        </Typography>
      </Grid>
      <Grid item>
        <VerticalTimeline>
          {education.map(
            ({ school, website, title, type, icon, date, description }) => (
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
                icon={iconSelector(icon)}
              >
                <JobTitle variant="h5">{title}</JobTitle>
                <a href={website} target="_blank" rel="noreferrer">
                  <Institution variant="h6">{school}</Institution>
                </a>
                <Type variant="caption">{type}</Type>
                <Typography variant="body2" gutterBottom>
                  {description}
                </Typography>
              </VerticalTimelineElement>
            )
          )}
          <VerticalTimelineElement
            iconStyle={{
              backgroundColor: t.palette.primary.light,
              color: '#fff',
            }}
            icon={<FlagCheckered />}
          />
        </VerticalTimeline>
      </Grid>
    </Grid>
  );
}

export default EducationTimeline;
