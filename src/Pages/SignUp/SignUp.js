import React, { useContext } from 'react'
import { AuthContext } from '../../Context/AuthProvider/AuthProvider'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import loginImage from '../../images/login.jpg'
import { Button, TextField, Typography } from '@mui/material';
import { Link } from 'react-router-dom';



export default function SignUp() {
    const {user,  createUser,
        setLoading,
        loading,
        googleLogin,
        login,
        logOut,
        setUser} = useContext(AuthContext);
       

  return (
 <Container fixed>
     <Box className='' sx={{padding: '100px'}}>

<Grid container spacing={2}>
  <Grid xs={12} md={6}>
    <Box sx={{padding:'30px'}}>
    <Typography variant='h5' sx={{fontWeight:500, color:'blueviolet' }} >Sign Up</Typography>
    <TextField id="outlined-basic" 
    label="Name" 
    name='name'
    type='text'
    variant="outlined" 
    sx={{marginTop:'30px', width:'100%'}}/>
    <TextField id="outlined-basic" 
    label="Email" 
    name='email'
    type='email'
    variant="outlined" 
    sx={{marginTop:'15px', width:'100%'}}/>
    <TextField id="outlined-basic" 
    label="Password" 
    name='password'
    type='password'
    variant="outlined" 
    sx={{marginTop:'15px', width:'100%'}}/>
    <Button 
    variant="contained"
    sx={{marginTop:'15px' }}>
    Sign Up</Button>
    </Box>
    <Typography variant='p'>Already User? <Link to='/login'>Login</Link></Typography>
  </Grid>
  <Grid item xs={12} md={6}>
  <img src={loginImage} alt="" style={{width: '100%'}} className='' />
  
  </Grid>
 
</Grid>
  </Box>
 </Container>
  )
}
