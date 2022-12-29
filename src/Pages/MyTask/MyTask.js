import React, { useContext, useEffect, useState } from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Button, CircularProgress, Divider, Typography } from '@mui/material';
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
  const {user, mode} = useContext(AuthContext)
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(()=>{
    setLoading(true)
      fetch(`https://task-management-server-one.vercel.app/tasks?email=${user?.email}`)
      .then(res=>res.json())
      .then(data=>{
        console.log(data)
        setTasks(data);
        setLoading(false)
      })
  }, [])

 const handleCompleteTask = (id)=>{
      fetch(`https://task-management-server-one.vercel.app/tasks/${id}`, {
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
   <>
   {
    loading? <CircularProgress sx={{mt:5}} color={`${mode? 'primary':'secondary'}`} />:  <div>
    <Typography variant='h5' sx={{mt:3, color:`${mode? 'dark':'white'}`}}>MY TASKS</Typography>
    <Divider variant="inset"/>
    <Box sx={{ flexGrow: 1, my:3, padding: '30px'}}>
  <Grid container spacing={2}>
    {
      tasks?.map(task=><Grid item xs={12} md={4}>
      <Item sx={{mb:1}}><Typography variant='p'>{task.task}</Typography> <br />
      <Button variant='contained' color={`${mode? 'primary':'secondary'}`} onClick={()=>handleCompleteTask(task._id)}>Complete Task</Button>
      </Item>
        
       </Grid>
      )
    }
    
  </Grid>
</Box>
  </div>
   }
   </>
    
  )
}
