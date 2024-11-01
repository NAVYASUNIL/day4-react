import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'

const Blog = () => {
    var [user,SetUser]=useState([])
    axios.get("https://jsonplaceholder.typicode.com/posts")
    .then((response)=>{
        SetUser(response.data)
        console.log(user)

    })
  return (
    <div><br/><br/><TableContainer>
    <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
     <TableHead>
         <TableRow>
             <TableCell>UserId</TableCell>
             <TableCell>Id</TableCell>
             <TableCell>Title</TableCell>
         </TableRow>
     </TableHead>
     <TableBody>
         {user.map((val)=>{
         return(
         <TableRow>
             <TableCell>{val.userId}</TableCell>
             <TableCell>{val.id}</TableCell>
             <TableCell>{val.title}</TableCell>
         </TableRow>
    
         )
     })
     }
         
         </TableBody>
    </Table>
 </TableContainer></div>
  )
}

export default Blog