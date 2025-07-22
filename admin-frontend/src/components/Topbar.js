import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@mui/material';

function Topbar() {
  return (
    <AppBar position="static" color="inherit" elevation={1}>
      <Toolbar>
        <Typography variant="h6" color="primary" sx={{ flexGrow: 1 }}>
          HealthPal Admin Dashboard
        </Typography>
        <Box>
          {/* Add user avatar, notifications, etc. */}
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Topbar; 