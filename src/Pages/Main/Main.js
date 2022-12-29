import { Box, Container } from '@mui/material';
import React, { useContext } from 'react'
import { Outlet } from 'react-router-dom';
import Navigation from '../../Components/Shared/Navigation/Navigation';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

export default function Main() {
    const {user,
        setLoading,
        loading,
        mode, 
        logOut,
        } = useContext(AuthContext);
  return (
    <Box sx={{backgroundColor:`${mode? 'white':'black'}`, height:'100vh'}}>
        <Navigation></Navigation>
        <Outlet></Outlet>
        
    </Box>
  )
}
