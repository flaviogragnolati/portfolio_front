import React from 'react';
import { Box, IconButton } from '@material-ui/core';

function CloseBtn({ handleClose }) {
  return (
    <Box
      display="flex"
      flexDirection="row"
      justifyContent="flex-end"
      //   pt={1}
      pr={1}
    >
      <IconButton onClick={handleClose}>x</IconButton>
    </Box>
  );
}

export default CloseBtn;
