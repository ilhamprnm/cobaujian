import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Dashboard from './platform-pages/Dashboard.jsx'


const Platform = () => {
  return (
    <Routes>
      <Route path='/' element={<Dashboard />}/>
    </Routes>
  )
}

export default Platform