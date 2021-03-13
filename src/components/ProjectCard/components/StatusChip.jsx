import React from 'react';
import { Chip, Tooltip, Typography } from '@material-ui/core';
import styled from 'styled-components';
import { useTranslation } from 'context/LangWrapper/useTranslation';

const StyledChip = styled(Chip)`
  background-color: ${(p) => p.theme.palette[p.type].main};
`;

const Status = styled(Typography)`
  position: absolute;
  top: 2%;
  right: 2%;
`;

function StatusChip({ status, color: _color, ...rest }) {
  const {
    Projects: {
      projectStatus,
      card: { statusHeading },
      tooltip: { statusTooltip },
    },
  } = useTranslation();
  let label, color;
  switch (status) {
    case 0:
      label = projectStatus[0];
      color = 'warning';
      break;
    case 1:
      label = projectStatus[1];
      color = 'info';
      break;
    case 2:
      label = projectStatus[2];
      color = 'success';
      break;
    case 3:
      label = projectStatus[3];
      color = 'success';
      break;
    case 4:
      label = projectStatus[5];
      color = 'error';
      break;
    default:
      label = 'Default';
      color = 'default';
      break;
  }

  return (
    <Tooltip title={statusTooltip}>
      <Status variant="overline">
        <StyledChip label={label} type={color} {...rest} />
      </Status>
    </Tooltip>
  );
}

export default StatusChip;
