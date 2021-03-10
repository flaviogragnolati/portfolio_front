import React from 'react';
import { Box, IconButton } from '@material-ui/core';
import { CloseSquareOutline } from 'styled-icons/evaicons-outline';
function CloseBtn({ handleClose }) {
  return (
    <Box
      display="flex"
      flexDirection="row"
      justifyContent="flex-end"
      //   pt={1}
      pr={1}
    >
      <IconButton onClick={handleClose}>
        <CloseSquareOutline size="2rem" />
      </IconButton>
    </Box>
  );
}

export default CloseBtn;
