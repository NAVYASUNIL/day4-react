import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
         <AppBar sx={{background: 'rgb(238,174,202)',
background: 'radial-gradient(circle, rgba(238,174,202,1) 11%, rgba(38,50,130,1) 51%)'}} >
        
            <Toolbar>
         <Typography variant="h6" color="inherit" component="div">
    My_App
  </Typography><hr/>
  <Link to='/t'>
  <Button variant='contained' color='success'> Blog</Button>
  </Link>&nbsp;&nbsp;&nbsp;
  <Link to='/b'>
  <Button variant='contained' color='success'> User</Button>
  </Link>&nbsp;&nbsp;&nbsp;
  <Link to='/l'>
  <Button variant='contained' color='success'>Listmap</Button>
  </Link>
 
  </Toolbar>
  </AppBar></div>
  )
}

export default Navbar