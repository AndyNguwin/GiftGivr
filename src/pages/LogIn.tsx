import React from 'react';
import {Avatar, Box, Button, Checkbox, Container, FormControlLabel, Grid, Paper, TextField, Typography} from "@mui/material";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

const LogIn=()=>{
    const handleSubmit=()=>console.log("Submit");
    return (
        <Container maxWidth="xs">
            <Paper elevation={10} sx={{marginTop:8, padding:2}}>
                <Avatar sx={{mx: "auto",bgcolor:"secondary.main",textAlign:"center",mb:1}}>
                  <LockOutlinedIcon />  
                </Avatar>
                <Typography component='h1' variant='h5'>
                    Sign In
                </Typography>
                <Box component='form' onSubmit={handleSubmit} noValidate sx={{mt:1}}>
                </Box>   
                <TextField placeholder="Enter username" fullWidth required autoFocus sx={{mb:2}}>
                </TextField> 
                <TextField placeholder="Enter password" fullWidth required autoFocus sx={{mb:2}}>
                </TextField>
                <FormControlLabel
                    control={<Checkbox value="remember" color="primary" />}
                    label="Remember me"
                /> 
                <Button type="submit" variant="contained" fullWidth sx={{mt:1,mb:1}}>
                    Sign In
                </Button>
            </Paper>
        </Container>
    )
    

}
export default LogIn;