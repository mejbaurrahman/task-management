import { Button, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useContext } from 'react'
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider'

export default function AddTask() {
const {user, mode} = useContext(AuthContext);
const navigate = useNavigate();
  const handleAddTask =(e)=>{
    e.preventDefault();
    const form = e.target;
    const task = form.task.value;
    const data = {
      email: user?.email,
      task,
      status: "not complete"
    }
    const url = `http://localhost:5000/tasks`;
    fetch(url, {
      method: "POST", 
      headers: {
        'content-type':'application/json'
      },
      body: JSON.stringify(data)
    }).then(res=>res.json())
    .then(data=>{
      console.log(data)
      toast.success('Task Insert Succesfully')
      navigate('/mytask');

    }).catch(error=>{
      console.log(error.message)
    })

  }
  return (
    <Box className='' sx={{margin:'0 auto'}} >
      <Typography variant='h5' sx={{my:3, color:`${mode? 'dark':'white'}`}} >ADD TASK</Typography>
      <form action="" onSubmit={handleAddTask}>
      <TextField
        
          id="filled-search"
          label="Task Description .."
          type="text"
          name= 'task'
          variant="filled"
          sx={{backgroundColor:`${mode? 'white': 'white'}`, width:'50%'}}
        /> 
        <br />
        <br />
        <Button type='submit' variant='contained' color={`${mode? 'primary':'secondary'}`}>ADD TASK</Button>
      </form>
    </Box>
  )
}
