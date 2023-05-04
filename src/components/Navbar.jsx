import { Box,AppBar,Toolbar,Typography, Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
       <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            EmployeeApp
          </Typography>
            <Button color="inherit" variant='contained'>
            <Link to={'/'}>Home</Link>
            </Button>
            <Button color="inherit" variant='contained'>
            <Link to={'/add'}>Add</Link>
            </Button>
            <Button color='inherit' variant='contained'>
            <Link to={'/caddilac'}>Card</Link>
            </Button>
          </Toolbar>
      </AppBar>
    </Box>
    </div>
  );
}

export default Navbar
