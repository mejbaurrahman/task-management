import React, { useContext, useState } from 'react'
import { AuthContext } from '../../Context/AuthProvider/AuthProvider'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import loginImage from '../../images/login.jpg'
import { Button, TextField, Typography } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';



export default function SignUp() {
  const navigate = useNavigate();
    const {user,  createUser,
        setLoading,
        loading,
        googleLogin,
        login,
        logOut,
        setUser} = useContext(AuthContext);
        const [errorShow, setErrorShow] = useState('');
        if(user?.email){
          navigate('/')
        }
      const signUp = (e)=>{
          e.preventDefault();
          setErrorShow('');
          const form = e.target;
          const email = form.email.value;
          const password = form.password.value;
        console.log(email, password)
          createUser(email, password)
          .then(result=>{
            const user = result.user;
            if(user?.email){
              navigate('/')
            }
          }).catch(error=>{
            console.log(error.message);
              setErrorShow(error.message)
          })
      }
  return (
 <Container fixed>
     <Box className='' sx={{paddingTop: '40px', px:'20px'}}>

<Grid container spacing={2}>
  <Grid xs={12} md={6}>
    <Box sx={{padding:'30px'}}>
    <Typography variant='h5' sx={{fontWeight:500, color:'#1976d2',  }} >Sign Up</Typography>
    
    <form action="" onSubmit={signUp}>
    <TextField id="outlined-basic" 
    label="Email" 
    name='email'
    type='email'
    variant="outlined" 
    sx={{marginTop:'25px', width:'100%'}}/>
    <TextField id="outlined-basic" 
    label="Password" 
    name='password'
    type='password'
    variant="outlined" 
    sx={{marginTop:'15px', width:'100%'}}/>
    <Button 
    type='submit'
    variant="contained"
    sx={{marginTop:'15px' }}>
    Sign Up</Button>
    </form>
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
