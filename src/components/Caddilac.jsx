import { Button, Card, CardActionArea, CardActions, CardContent, Grid, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './Des.css'

const Caddilac = () => {
    var [value,setValue] = useState([])
    useEffect(()=>{
        axios.get('https://dummyjson.com/users').then((response)=>{
            console.log(response.data.users)
            setValue(value=response.data.users)
    })
    },[])
  return (
    <div classname='div'>
      <Grid container spacing={2}></Grid>
       {value.map((data,ind)=>{
        return(
       <Card className='card' sx={{}}>
      <CardActionArea>
        <CardContent>
                        <Typography>First Name: {data.firstName}</Typography>
                        <Typography>Last Name: {data.lastName}</Typography>
                        <Typography>Age: {data.age}</Typography>       
                </CardContent>
                </CardActionArea>
              </Card>
              )
            })}
    </div>
  )
      }

export default Caddilac
