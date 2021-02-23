import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import styled from 'styled-components';
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

const StyledTabs = styled((props) => {
  return <Tabs {...props} classes={{ indicator: 'indicator' }}></Tabs>;
})`
  && {
    border-bottom: 1px solid yellow;
  }
  && .indicator {
    background-color: #1f6ff7;
  }
`;

const StyledTab = styled(Tab)`
  flex: 1 1 auto;
  margin: 10px;
  padding: 20px;
  border: 2px solid #f7f7f7;
  text-align: center;
  text-transform: uppercase;
  position: relative;
  overflow: hidden;
  transition: 0.3s;
  &:after {
    position: absolute;
    transition: 0.3s;
    content: '';
    width: 0;
    left: 50%;
    bottom: 0;
    height: 3px;
    background: #f7f7f7;
    right: 0;
    left: auto;
    color: red;
  }
  &:hover {
    cursor: pointer;
    &:after {
      width: 100%;
      left: 0;
    }
  }
`;

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
      style={{
        height: '400px',
        display: 'flex',
        flexGrow: 1,
      }}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    height: 224,
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
}));

export default function VerticalTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        indicatorColor="primary"
        orientation="vertical"
        variant="fullWidth"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
        <StyledTab label="Item One" {...a11yProps(0)} />
        <StyledTab label="Item Two" {...a11yProps(1)} />
        <StyledTab label="Item Three" {...a11yProps(2)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <SkillBar
          skills={skills}
          height={25}
          animationDelay={500}
          animationDuration={2000}
        />
      </TabPanel>
    </div>
  );
}
