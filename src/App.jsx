import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import Dashboard from "./pages/Dashboard.jsx"

function App() {
  
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/Login' element={<Login />}/>
        <Route path='/Signup' element={<Signup />}/>
        <Route path='/Dashboard' element={<Dashboard />} />
      </Routes>
    </Router>
  )
}

export default App
