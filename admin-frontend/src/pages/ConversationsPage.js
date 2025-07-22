import React from 'react';
import { Box, Typography, Paper, List, ListItem, ListItemText } from '@mui/material';

const conversations = [
  { id: 1, user: 'John Doe', lastMessage: 'Thank you!', time: '10:30 AM' },
  { id: 2, user: 'Jane Smith', lastMessage: 'What should I do next?', time: '10:25 AM' },
  // ...more
];

function ConversationsPage() {
  return (
    <Box p={3}>
      <Typography variant="h4" gutterBottom>
        Conversations
      </Typography>
      <Paper sx={{ mt: 2 }}>
        <List>
          {conversations.map(conv => (
            <ListItem key={conv.id} button>
              <ListItemText
                primary={`${conv.user} - ${conv.lastMessage}`}
                secondary={conv.time}
              />
            </ListItem>
          ))}
        </List>
      </Paper>
    </Box>
  );
}

export default ConversationsPage; 