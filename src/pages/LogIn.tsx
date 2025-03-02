import React, { useState } from 'react';
import { Avatar, Box, Button, Checkbox, Container, FormControlLabel, Paper, TextField, Typography } from "@mui/material";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

const LogIn = () => {
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const username = formData.get('username') as string;
    const password = formData.get('password') as string;

    let valid = true;

    if (username.length < 6) {
      setUsernameError('Username must be at least 6 characters long.');
      valid = false;
    } else {
      setUsernameError('');
    }

    if (password.length < 8) {
      setPasswordError('Password must be at least 8 characters long.');
      valid = false;
    } else {
      setPasswordError('');
    }

    if (valid) {
      // Proceed with form submission
      console.log('Form submitted:', { username, password });
    }
  };

  return (
    <Container maxWidth="xs">
      <Paper elevation={10} sx={{ marginTop: 8, padding: 2 }}>
        <Avatar sx={{ mx: "auto", bgcolor: "secondary.main", textAlign: "center", mb: 1 }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component='h1' variant='h5'>
          Sign In
        </Typography>
        <Box component='form' onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            name="username"
            placeholder="Enter username"
            fullWidth
            required
            autoFocus
            error={!!usernameError}
            helperText={usernameError}
            sx={{ mb: 2 }}
          />
          <TextField
            name="password"
            placeholder="Enter password"
            fullWidth
            required
            type="password"
            error={!!passwordError}
            helperText={passwordError}
            sx={{ mb: 2 }}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button type="submit" variant="contained" fullWidth sx={{ mt: 1, mb: 1 }}>
            Sign In
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}

export default LogIn;