import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import Platform from "./pages/Platform.jsx";
import Ujiansaya from './pages/platform-pages/Ujiansaya.jsx'

function App() {
  
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/Login' element={<Login />}/>
        <Route path='/Signup' element={<Signup />}/>
        <Route path='/Platform//*' element={<Platform />} />
        <Route path='/platform/ujiansaya' element={<Ujiansaya />}/>
      </Routes>
    </Router>
  )
}

export default App
