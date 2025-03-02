import React from 'react';
import { Avatar, Box, Container, Typography } from '@mui/material';

const MyProfile: React.FC = () => {
  const user = {
    name: 'John Doe',
    username: 'johndoe'
  };

  return (
    <Container maxWidth="sm">
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        mt={4}
        p={2}
        boxShadow={3}
        borderRadius={2}
      >
        <Avatar
          alt={user.name}
          sx={{ width: 100, height: 100, mb: 2 }}
        />
        <Typography variant="h4" component="h1" gutterBottom>
          {user.name}
        </Typography>
        <Typography variant="h6" component="h2" color="textSecondary">
          @{user.username}
        </Typography>
      </Box>
    </Container>
  );
};

export default MyProfile;