import { Button, Stack, TextField, Typography } from '@mui/material'
import React from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'

const AddEmp = () => {
    const {register,handleSubmit} = useForm();
    const getVal =(val)=>{
        alert('Form submitted')
        axios.post('https://reqres.in/api/users',val).then((res)=>{
            alert(`The data is posted with id ${res.data.id}`)
        })
    }
  return (
    <div>
         <Stack
      component="form"
      sx={{
        width: '25ch',
        marginLeft: 'auto' ,
        marginRight: 'auto',
        marginTop: '100px',
        marginBottom: 'auto',
      }}
      spacing={2}
      noValidate
      autoComplete="off"
    >
      <TextField
        name='empname'
        {...register('empname')}
        hiddenLabel
        id="filled-hidden-label-small"
        placeholder="Employee Name"
        variant="outlined"
        
      />
      <TextField
        name='emplocation'
        {...register('emplocation')}
        hiddenLabel
        id="filled-hidden-label-normal"
        placeholder="Employee Location"
        variant="outlined"
      />

      <TextField
        name='empdesignation'
        {...register('empdesignation')}
        hiddenLabel
        id="filled-hidden-label-small"
        placeholder="Employee Designation"
        variant="outlined"
      />

    <Button onClick={handleSubmit(getVal)} variant='contained' color='warning'>Submit</Button>  
    </Stack>
    </div>
  )
}

export default AddEmp
