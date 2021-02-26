import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import MoreAbout from './MoreAbout';
import LessAbout from './LessAbout';
import styled from 'styled-components';

const Accordion = styled(MuiAccordion)`
  background-color: transparent;
`;
const AccordionSummary = styled(MuiAccordionSummary)`
  pointer-events: none;
  background-color: transparent;
  &:focus {
    background-color: transparent;
  }
  margin-right: -0.85rem;
`;

const AccordionDetails = styled(MuiAccordionDetails)`
  padding: ${(p) => p.theme.spacing(2)};
`;
// const AccordionDetails = withStyles((theme) => ({
//   root: {
//     padding: theme.spacing(2),
//   },
// }))(MuiAccordionDetails);

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion
        square
        expanded={expanded === 'moreAbout'}
        onChange={handleChange('moreAbout')}
      >
        <AccordionSummary id="moreAbout">
          {expanded ? <LessAbout /> : <MoreAbout />}
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
            lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
