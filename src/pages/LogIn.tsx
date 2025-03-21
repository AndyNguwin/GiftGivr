import React, { useState } from 'react';
import { Avatar, Box, Button, Checkbox, Container, FormControlLabel, Paper, TextField, Typography } from "@mui/material";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'

const LogIn = () => {
  const navigate = useNavigate()
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const username = formData.get('username') as string;
    const password = formData.get('password') as string;

    let valid = true;

    // if (username.length < 6) {
    //   setUsernameError('Username must be at least 6 characters long.');
    //   valid = false;
    // } else {
    //   setUsernameError('');
    // }

    // if (password.length < 8) {
    //   setPasswordError('Password must be at least 8 characters long.');
    //   valid = false;
    // } else {
    //   setPasswordError('');
    // }

    if (valid) {
      // Proceed with form submission
      axios.post('http://localhost:5000/api/login', {
        username : username,
        password : password
      }).then((response) => {
        console.log('Form submitted:', { username, password });
        console.log(response.data.userId);
        if (response.data.userId){
          // Store a flag in localStorage when logged in
          localStorage.setItem('isLoggedIn', 'true');
          localStorage.setItem('user_id', response.data.userId);
          navigate('/');
        } else {
          alert("Incorrect credentials!");
        }
      }).catch((error) => {
        console.error('Login failed', error);
      });
    }
  };

  return (
    <Container maxWidth="xs">
      <Paper elevation={10} sx={{ marginTop: 8, marginBottom: 4, padding: 2 }}>
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

      <Typography component='h1' variant='h6'>
        Don't have an account yet?
      </Typography>
      <Button variant="contained" sx={{ mt: 1, mb: 1 }} onClick={() => {navigate('/CreateAccount');}}>
        Sign Up
      </Button>
    </Container>
  );
}

export default LogIn;