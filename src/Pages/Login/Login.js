import React, { useContext, useState } from 'react'
import { AuthContext } from '../../Context/AuthProvider/AuthProvider'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import loginImage from '../../images/login.jpg'
import { Button, TextField, Typography } from '@mui/material';
import { Link, useLocation, useNavigate } from 'react-router-dom';



export default function Login() {
    const {user,  createUser,
        setLoading,
        loading,
        googleLogin,
        login,
        logOut,
    setUser} = useContext(AuthContext);
    const [errorShow, setErrorShow] = useState('');
    const location = useLocation();
    const navigate = useNavigate();
    let from = location.state?.from?.pathname || "/";
    const handleLogin =(e)=>{
            e.preventDefault();
            setErrorShow('')
            const form = e.target;
            const email = form.email.value;
            const password = form.password.value;
            login(email, password)
            .then(result=>{
              const user = result.user;
              navigate(from, {replace:true})
            }).catch(error=>{
              setErrorShow(error.message)
            })
        }

    const handleGoogleLogin =()=>{
          setErrorShow('')
            googleLogin()
            .then(user=>{
              navigate(from, {replace:true})
            }).catch((error)=> {
              console.log(error.message);
              setErrorShow(error.message)
            })
        }
    if(user?.email){
      navigate('/')
    }
  return (
 <Container fixed>
     <Box className='' sx={{paddingTop: '40px', px:'20px'}}>

<Grid container spacing={2}>
  <Grid xs={12} md={6}>
    <Box sx={{padding:'30px'}}>
    <Typography variant='h5' sx={{fontWeight:500, color:'#1976d2' }} >Login</Typography>
   <form action="" onSubmit={handleLogin}>
   <TextField id="outlined-basic" 
    label="Email" 
    name='email'
    type='email'
    variant="outlined" 
    sx={{marginTop:'30px', width:'100%'}}/>
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
    Login</Button>
   </form>
    </Box>
    <Typography variant='p'>New User? <Link to='/signup'>Sign Up</Link></Typography>
   <br/>
    <Button 
    variant="contained"
    onClick={handleGoogleLogin}
    sx={{marginTop:'15px' }}>
   Log in with Google</Button>
  </Grid>
  <Grid item xs={12} md={6}>
  <img src={loginImage} alt="" style={{width: '100%'}} className='' />
  
  </Grid>
 
</Grid>
  </Box>
 </Container>
  )
}
