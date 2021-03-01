import { useTranslation } from 'context/LangWrapper/useTranslation';
import React from 'react';
import styled from 'styled-components';

const StyledDate = styled.h5`
  color: blue;
`;

function Date({ date, ...rest }) {
  const {
    Projects: {
      card: { dateHeading },
    },
  } = useTranslation();

  return (
    <StyledDate>
      {dateHeading}: {date}
    </StyledDate>
  );
}

export default Date;
