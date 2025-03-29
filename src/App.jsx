import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import { Toaster } from 'react-hot-toast';
import { useSelector } from 'react-redux';
import ProtectedRoute from './components/ProtectedRoute';
import PublicRoute from './components/PublicRoute';

const App = () => {
  const { loading } = useSelector((state) => state.alerts);

  return (

    <Router>
      {loading && (
        <div className='spinner-parent'>
          <div class="spinner-border" role="status">
          </div>
        </div>
      )}
      <Toaster
        position="top-center"
        reverseOrder={false} />
      <Routes>
        <Route
          path='/login'
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>} />
        <Route
          path='/register'
          element={
            <PublicRoute>
              <Register />
            </PublicRoute>} />
        <Route
          path='/'
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>} />
      </Routes>
    </Router>
  )
}

export default App;
