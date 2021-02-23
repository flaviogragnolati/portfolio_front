import { Box } from '@material-ui/core';
import { Dashboard, Schedule } from '@material-ui/icons';
import TabWrapper from 'components/tabs';
import React from 'react';
import SkillBar from 'react-skillbars';

const skills = [
  {
    type: 'Java',
    level: 100,
    color: {
      bar: '#3498db',
      title: {
        text: '#fff',
        background: '#2980b9',
      },
    },
  },
  {
    type: 'React',
    level: 85,
    color: {
      bar: '#4288d0',
      title: {
        text: '#fff',
        background: '#124e8c',
      },
    },
  },
  {
    type: 'Javascript',
    level: 75,
    color: {
      bar: '#2c3e50',
      title: {
        text: '#fff',
        background: '#2c3e50',
      },
    },
  },
  {
    type: 'Spring',
    level: 50,
    color: {
      bar: '#5a68a5',
      title: {
        text: '#fff',
        background: '#46465e',
      },
    },
  },
  {
    type: 'Docker',
    level: 25,
    color: {
      bar: '#525252',
      title: {
        text: '#fff',
        background: '#333333',
      },
    },
  },
  {
    type: 'HTML',
    level: 20,
    color: {
      bar: 'black',
      title: {
        text: '#111',
        background: '#fff',
      },
    },
  },
  {
    type: 'NoSQL',
    level: 0,
    color: {
      bar: '#2ecc71',
      title: {
        text: '#fff',
        background: '#27ae60',
      },
    },
  },
];

function Skills() {
  return (
    // <Box display="flex" flexDirection="row">
    //   <SkillBar
    //     skills={skills}
    //     height={25}
    //     animationDelay={500}
    //     animationDuration={2000}
    //   />
    // </Box>
    <TabWrapper
      color="rose"
      horizontal={{
        tabsGrid: { xs: 12, sm: 4, md: 4 },
        contentGrid: { xs: 12, sm: 8, md: 8 },
      }}
      tabs={[
        {
          tabButton: 'Dashboard',
          tabIcon: Dashboard,
          tabContent: (
            <span>
              <p>
                Collaboratively administrate empowered markets via plug-and-play
                networks. Dynamically procrastinate B2C users after installed
                base benefits.
              </p>
              <br />
              <p>
                Dramatically visualize customer directed convergence without
                revolutionary ROI. Collaboratively administrate empowered
                markets via plug-and-play networks. Dynamically procrastinate
                B2C users after installed base benefits.
              </p>
              <br />
              <p>
                Dramatically visualize customer directed convergence without
                revolutionary ROI. Collaboratively administrate empowered
                markets via plug-and-play networks. Dynamically procrastinate
                B2C users after installed base benefits.
              </p>
            </span>
          ),
        },
        {
          tabButton: 'Schedule',
          tabIcon: Schedule,
          tabContent: (
            <span>
              <p>
                Efficiently unleash cross-media information without cross-media
                value. Quickly maximize timely deliverables for real-time
                schemas.
              </p>
              <br />
              <p>
                Dramatically maintain clicks-and-mortar solutions without
                functional solutions. Dramatically visualize customer directed
                convergence without revolutionary ROI. Collaboratively
                administrate empowered markets via plug-and-play networks.
                Dynamically procrastinate B2C users after installed base
                benefits.
              </p>
            </span>
          ),
        },
      ]}
    />
  );
}

export default Skills;
