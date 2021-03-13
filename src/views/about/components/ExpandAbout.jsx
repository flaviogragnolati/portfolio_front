import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import MoreAboutBtn from './MoreAboutBtn';
import LessAboutBtn from './LessAboutBtn';
import styled from 'styled-components';
import Timelines from 'views/timelines';
import { useTranslation } from 'context/LangWrapper/useTranslation';
import { Box, Tooltip } from '@material-ui/core';

const Accordion = styled(MuiAccordion)`
  background-color: transparent;
  width: 100%;
  box-shadow: none;
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

export default function CustomizedAccordions() {
  const {
    MoreAbout: { moreBtn, lessBtn, moreTooltip },
  } = useTranslation();

  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(!expanded);
  };

  return (
    <Accordion
      expanded={expanded === true}
      onChange={handleChange('moreAbout')}
    >
      <Tooltip title={moreTooltip} placement="top-end">
        <AccordionSummary id="moreAbout">
          {expanded ? (
            <LessAboutBtn BtnText={lessBtn} />
          ) : (
            <MoreAboutBtn BtnText={moreBtn} />
          )}
        </AccordionSummary>
      </Tooltip>
      <AccordionDetails>
        <Timelines setExpanded={setExpanded} />
      </AccordionDetails>
    </Accordion>
  );
}
