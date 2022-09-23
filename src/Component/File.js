import { Grid,TextField, Typography,Button } from '@mui/material'
import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'




function File({getHandler}) {

  const[id,setId]=useState("")

  const navigate = useNavigate();

  const[input,setInput]=useState('')

  


  const changeHandle=(e)=>{
    setId(e.target.value)
  }

  const submitHandler=(id)=>{
    if(id){
      console.log(id)
    axios.get(`https://api.nasa.gov/neo/rest/v1/neo/${id}?api_key=YBJeKu0yhTARiZ96clKC9axS2k2gTNIeAbdGV7fj`)
     .then((res)=>{
    getHandler(res.data)
    navigate('/Api')
    })}else{
      alert("Please enter the valid id")
    }}

   
const randomNum=()=>{
  axios.get(`https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=YBJeKu0yhTARiZ96clKC9axS2k2gTNIeAbdGV7fj`)
     .then((res)=>{setInput(res.data.near_earth_objects)
      console.log(res.data.near_earth_objects)
      var a=res.data.near_earth_objects
     var b= Math.floor(Math.random() * (20) ) 
    var c=a[b].id
      submitHandler(c)
      
     }
     )
     }




return (
   <Grid container>
     <Grid item lg={4} md={4} sm={12}>
    </Grid>
    <Grid item lg={4} md={4} sm={12}>
      <Typography variant='h4' sx={{marginTop: 5}}> Welcome NASA APIs</Typography>
    <TextField variant='filled' placeholder='Enter Asteroid ID' fullWidth sx={{marginTop: 4,marginLeft:2}} onChange={changeHandle}/>
    <Button  variant='contained' color='primary' size="large" fullWidth sx={{marginTop: 4,marginLeft:2}} onClick={()=>submitHandler(id)} >Submit</Button>
    <Button  variant='contained' color='primary' size="large" fullWidth sx={{marginTop: 4,marginLeft:2}} onClick={randomNum}>Random Asteroid</Button>
    </Grid>
    <Grid item lg={4} md={4} sm={12}>
    </Grid>
    
   </Grid>
  
  )
}

export default File