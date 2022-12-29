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
export default function CompletedTask() {
  const {user, mode} = useContext(AuthContext)
  const [completeTasks, setCompleteTasks] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(()=>{
    setLoading(true)
      fetch(`http://localhost:5000/completetasks?email=${user?.email}`)
      .then(res=>res.json())
      .then(data=>{
        console.log(data)
        setCompleteTasks(data);
        setLoading(false)
      })
  }, [])

 const handleNotCompleteTask = (id)=>{
      fetch(`http://localhost:5000/completetasks/${id}`, {
        method: "PUT",
        headers:{
          'content-type':'application/json'
        },
      })
      .then(res=>res.json())
      .then(data=>{
        console.log(data);
        toast.success(' Added in you task list again');
        const newTasks = completeTasks.filter(task=>task._id !== id);
        setCompleteTasks(newTasks);
      }).catch(error=>{
        console.log(error.message);
        toast.error(error.message)
      })
 }
  return (
    <>
    {
      loading? <CircularProgress sx={{mt:5}} color={`${mode? 'primary':'secondary'}`} /> : <div>
      <Typography variant='h5' sx={{mt:3, color:`${mode? 'dark':'white'}`}}>COMPLETED TASKS</Typography>
      <Divider sx={{color:`${mode? 'black':'white'}`}}/>
      <Box sx={{ flexGrow: 1, my:3, padding: '30px'}}>
    <Grid container spacing={2}>
      {
        completeTasks?.map(task=><Grid item xs={12} md={4}>
        <Item sx={{mb:1}}><Typography variant='p'>{task.task}</Typography> <br />
        <Button variant='contained' color={`${mode? 'primary':'secondary'}`} onClick={()=>handleNotCompleteTask(task._id)}>Not Completed</Button>
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
