import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './components/Login'
import Register from './components/Register'
import Home from './components/Home'
import { Toaster } from 'react-hot-toast';

const App = () => {

  return (

    <Router>
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
      <Routes>

        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/' element={<Home />} />

      </Routes>
    </Router>
  )
}

export default App;
