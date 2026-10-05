import React from 'react'
import Sidebar from './Sidebar'
import { Navigate, Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Dashboardlayout from './pages/Dashboardlayout'
import Signup from './pages/Signup'
import NotFound from './pages/NotFound'
import Signin from './pages/Signin'
import { useState } from 'react'
import Profile from './pages/Profile'
import Courses from './pages/Courses'
import Results from './pages/Results'

const App = () => {
  return (
    <>
    {/* <Sidebar/> */}
    <Routes>
      <Route path='/' element={<Navigate to={'/signin'} replace/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/signin' element={<Signin/>}/>

      {/* Nested routes */}
      <Route path='/dashboard' element={<Dashboardlayout/>}>
        <Route index element={<Dashboard/>}/>
        <Route path= 'profile/:id' element={<Profile/>}/>
        <Route path='courses' element={<Courses/>}/>
        <Route path='results' element={<Results/>}/>
      </Route>


      {/* Wildcard */}
      <Route path='*' element={<NotFound/>}/>
    </Routes>
    
    </>
  )
}

export default App