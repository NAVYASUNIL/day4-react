import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Table } from '@mui/material'
import { Route, Routes } from 'react-router-dom'
import Blog from './Components/Blog'
import Navbar from './Components/Navbar'
import Usertable from './Components/Usertable'
import Listmap from './Components/Listmap'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar/>
    
     <Routes>
      <Route path='/b' element={ <Blog/>}/>
      <Route path='/t' element={<Usertable/>}/>
      <Route path='/l' element={<Listmap/>}/>
     </Routes>
     
     
      
    </>
  )
}

export default App
