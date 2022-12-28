import React, { useContext } from 'react'
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

export default function Main() {
    const {user,  createUser,
        setLoading,
        loading,
        googleLogin,
        login,
        logOut,
        setUser} = useContext(AuthContext);
  return (
    <div>Main
        <button onClick={logOut}>logout</button>
    </div>
  )
}
