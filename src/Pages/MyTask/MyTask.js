import React, { useContext, useEffect, useState } from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Button, Divider, Typography } from '@mui/material';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import { toast } from 'react-hot-toast';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
export default function MyTask() {
  const {user} = useContext(AuthContext)
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(()=>{
      fetch(`http://localhost:5000/tasks?email=${user?.email}`)
      .then(res=>res.json())
      .then(data=>{
        console.log(data)
        setTasks(data);
      })
  }, [])

 const handleCompleteTask = (id)=>{
      fetch(`http://localhost:5000/tasks/${id}`, {
        method: "PUT",
        headers:{
          'content-type':'application/json'
        },
      })
      .then(res=>res.json())
      .then(data=>{
        console.log(data);
        toast.success('Congrats! You have completed the task');
        const newTasks = tasks.filter(task=>task._id !== id);
        setTasks(newTasks);
      }).catch(error=>{
        console.log(error.message);
        toast.error(error.message)
      })
 }
  return (
    <div>
      <Typography variant='h5' sx={{mt:3}}>MY TASKS</Typography>
      <Divider variant="inset"/>
      <Box sx={{ flexGrow: 1, my:3, padding: '30px'}}>
    <Grid container spacing={2}>
      {
        tasks?.map(task=><Grid item xs={12} md={4}>
        <Item sx={{mb:1}}><Typography variant='p'>{task.task}</Typography> <br />
        <Button variant='contained' onClick={()=>handleCompleteTask(task._id)}>Complete Task</Button>
        </Item>
          
         </Grid>
        )
      }
      
    </Grid>
  </Box>
    </div>
    
  )
}
