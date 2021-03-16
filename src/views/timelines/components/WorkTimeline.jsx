import React from 'react';
import styled from 'styled-components';
import { Grid, Typography } from '@material-ui/core';

//Timeline
import VerticalTimelineComponent from 'components/VerticalTimeline';
import 'components/VerticalTimeline/VerticalTimeline.css';
import 'components/VerticalTimeline/VerticalTimelineElement.css';

//Icons
import { FlagCheckered } from 'styled-icons/boxicons-solid';
import { Factory } from 'styled-icons/boxicons-solid';
import { Atom } from 'styled-icons/boxicons-regular';
import { DesktopComputer } from 'styled-icons/heroicons-outline';
import { OilCan } from 'styled-icons/fa-solid';

//Hooks and utils
import { useTranslation } from 'context/LangWrapper/useTranslation';
import useFullTheme from 'context/ThemeWrapper/useFullTheme';

const { VerticalTimeline, VerticalTimelineElement } = VerticalTimelineComponent;

const JobTitle = styled(Typography)`
  color: ${(p) => p.theme.palette.secondary.light};
`;

const Company = styled(Typography)`
  color: ${(p) => p.theme.palette.text.primary};
  text-decoration: none;
`;
const Sector = styled(Typography)`
  color: ${(p) => p.theme.palette.text.primary};
`;

const Highlight = styled(Typography)`
  color: ${(p) => p.theme.palette.primary.light};
`;

const iconSelector = (icon) => {
  switch (icon) {
    case 'tech':
      return <DesktopComputer />;
    case 'chem':
      return <Atom />;
    case 'oil':
      return <OilCan />;
    case 'factory':
      return <Factory />;
    default:
      break;
  }
};

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
            ({
              company,
              sector,
              website,
              position,
              icon,
              date,
              description,
              highlight,
            }) => (
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
                icon={iconSelector(icon)}
              >
                <JobTitle variant="h5">{position}</JobTitle>
                <a href={website} target="_blank" rel="noreferrer">
                  <Company variant="h6">{company}</Company>
                </a>
                <Sector variant="caption">{sector}</Sector>
                <Typography variant="body2">{description}</Typography>
                {highlight && (
                  <Highlight variant="body2">{highlight}</Highlight>
                )}
              </VerticalTimelineElement>
            )
          )}
          <VerticalTimelineElement
            iconStyle={{
              backgroundColor: t.palette.secondary.light,
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
