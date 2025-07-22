import React from 'react';
import { Box, Typography, Paper, TextField, Button } from '@mui/material';

function SettingsPage() {
  return (
    <Box p={3}>
      <Typography variant="h4" gutterBottom>
        Settings
      </Typography>
      <Paper sx={{ p: 3, mt: 2, maxWidth: 500 }}>
        <form>
          <TextField
            label="WhatsApp API Key"
            fullWidth
            margin="normal"
            variant="outlined"
          />
          <TextField
            label="AI Model"
            fullWidth
            margin="normal"
            variant="outlined"
          />
          <Button variant="contained" color="primary" sx={{ mt: 2 }}>
            Save Settings
          </Button>
        </form>
      </Paper>
    </Box>
  );
}

export default SettingsPage; 