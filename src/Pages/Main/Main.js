import React, { useContext } from 'react'
import { Outlet } from 'react-router-dom';
import Navigation from '../../Components/Shared/Navigation/Navigation';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

export default function Main() {
    const {user,
        setLoading,
        loading,
       
        logOut,
        } = useContext(AuthContext);
  return (
    <div>
        <Navigation></Navigation>
        <Outlet></Outlet>
        
    </div>
  )
}
