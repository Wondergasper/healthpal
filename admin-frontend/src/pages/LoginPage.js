import React from 'react';
import { Box, Typography, Paper, TextField, Button } from '@mui/material';

function LoginPage() {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
      bgcolor="#f4f6f8"
    >
      <Paper sx={{ p: 4, minWidth: 320 }}>
        <Typography variant="h5" gutterBottom>
          Admin Login
        </Typography>
        <form>
          <TextField
            label="Email"
            fullWidth
            margin="normal"
            variant="outlined"
          />
          <TextField
            label="Password"
            type="password"
            fullWidth
            margin="normal"
            variant="outlined"
          />
          <Button variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
            Login
          </Button>
        </form>
      </Paper>
    </Box>
  );
}

export default LoginPage; 