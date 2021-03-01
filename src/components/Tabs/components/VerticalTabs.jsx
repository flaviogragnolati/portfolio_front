import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Tabs, Tab, Box } from '@material-ui/core';
import styled from 'styled-components';

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
  padding: 50px 10px;
  border: 2px solid #f7f7f7;
  text-align: center;
  text-transform: uppercase;
  position: relative;
  /* overflow: hidden; */
  transition: 0.3s;
  &:after {
    position: absolute;
    transition: 0.3s;
    content: '';
    width: 0;
    left: 50%;
    bottom: 0;
    height: 5px;
    background: ${(p) => p.theme.palette.secondary.light};
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
    height: '100%',
  },
  tabs: {
    borderRight: `5px solid ${theme.palette.divider}`,
    minWidth: '15%',
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
        indicatorColor="secondary"
        orientation="vertical"
        variant="fullWidth"
        value={value}
        onChange={handleChange}
        scrollButton="off"
        className={classes.tabs}
        component="section"
        centered={true}
      >
        <StyledTab label="Technical Skills" {...a11yProps(0)} />
        <StyledTab label="Soft Skills" {...a11yProps(1)} />
        <StyledTab label="Tools" {...a11yProps(2)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        ONE ONE ONE ONE ONE ONE ONE ONE ONE ONE ONE ONE ONE ONE ONE ONE ONE ONE
        ONE ONE ONE ONE ONE ONE ONE ONE ONE ONE ONE ONE ONE ONE ONE ONE ONE ONE
        ONE ONE ONE ONE
      </TabPanel>
      <TabPanel value={value} index={1}>
        TWO
      </TabPanel>
      <TabPanel value={value} index={2}>
        THREE
      </TabPanel>
    </div>
  );
}

// function TabPanel(props) {
//   const { children, value, index, ...other } = props;

//   return (
//     <div
//       role="tabpanel"
//       hidden={value !== index}
//       id={`vertical-tabpanel-${index}`}
//       aria-labelledby={`vertical-tab-${index}`}
//       {...other}
//     >
//       {value === index && (
//         <Box p={3}>
//           <Typography>{children}</Typography>
//         </Box>
//       )}
//     </div>
//   );
// }

// TabPanel.propTypes = {
//   children: PropTypes.node,
//   index: PropTypes.any.isRequired,
//   value: PropTypes.any.isRequired,
// };

// function a11yProps(index) {
//   return {
//     id: `vertical-tab-${index}`,
//     'aria-controls': `vertical-tabpanel-${index}`,
//   };
// }

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//     backgroundColor: theme.palette.background.paper,
//     display: 'flex',
//     height: 224,
//   },
//   tabs: {
//     borderRight: `1px solid ${theme.palette.divider}`,
//   },
// }));

// export default function VerticalTabs() {
//   const classes = useStyles();
//   const [value, setValue] = React.useState(0);

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };

//   return (
//     <div className={classes.root}>
//       <Tabs
//         orientation="vertical"
//         variant="scrollable"
//         value={value}
//         onChange={handleChange}
//         aria-label="Vertical tabs example"
//         className={classes.tabs}
//       >
//         <Tab label="Item One" {...a11yProps(0)} />
//         <Tab label="Item Two" {...a11yProps(1)} />
//         <Tab label="Item Three" {...a11yProps(2)} />
//       </Tabs>
//       <TabPanel value={value} index={0}>
//         Item One
//       </TabPanel>
//       <TabPanel value={value} index={1}>
//         Item Two
//       </TabPanel>
//       <TabPanel value={value} index={2}>
//         Item Three
//       </TabPanel>
//     </div>
//   );
// }
