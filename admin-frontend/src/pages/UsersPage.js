import React from 'react';
import { Box, Typography, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

const users = [
  { id: 1, name: 'John Doe', phone: '+123456789', lastActive: 'Today' },
  { id: 2, name: 'Jane Smith', phone: '+987654321', lastActive: 'Yesterday' },
  // ...more
];

function UsersPage() {
  return (
    <Box p={3}>
      <Typography variant="h4" gutterBottom>
        Users
      </Typography>
      <TableContainer component={Paper} sx={{ mt: 2 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell>Last Active</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map(user => (
              <TableRow key={user.id}>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.phone}</TableCell>
                <TableCell>{user.lastActive}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default UsersPage; 