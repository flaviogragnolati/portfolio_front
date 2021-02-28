import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import MoreAboutBtn from './MoreAboutBtn';
import LessAboutBtn from './LessAboutBtn';
import styled from 'styled-components';
import Timelines from 'views/timelines';
import { useTanslation } from 'context/LangWrapper/useTranslation';

const Accordion = styled(MuiAccordion)`
  background-color: transparent;
  width: 100%;
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
  const {
    MoreAbout: { moreBtn, lessBtn },
  } = useTanslation();

  const [expanded, setExpanded] = useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <Accordion
      square
      expanded={expanded === 'moreAbout'}
      onChange={handleChange('moreAbout')}
    >
      <AccordionSummary id="moreAbout">
        {expanded ? (
          <LessAboutBtn BtnText={lessBtn} />
        ) : (
          <MoreAboutBtn BtnText={moreBtn} />
        )}
      </AccordionSummary>
      <AccordionDetails>
        <Timelines />
      </AccordionDetails>
    </Accordion>
  );
}
