import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import { Toaster } from 'react-hot-toast';
import { useSelector } from 'react-redux';
import ProtectedRoute from './components/ProtectedRoute';
import PublicRoute from './components/PublicRoute';
import ApplyDoctor from './pages/ApplyDoctor';
import Notifications from './pages/Notifications';
import UsersList from './pages/Admin/UsersList';
import DoctorsList from './pages/Admin/DoctorsList';
import Profile from './pages/Doctor/Profile';

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
        <Route
          path='/apply-doctor'
          element={
            <ProtectedRoute>
              <ApplyDoctor />
            </ProtectedRoute>} />
        <Route
          path='/notifications'
          element={
            <ProtectedRoute>
              <Notifications />
            </ProtectedRoute>} />
        <Route
          path='/users'
          element={
            <ProtectedRoute>
              <UsersList />
            </ProtectedRoute>} />
        <Route
          path='/admin/doctors-list'
          element={
            <ProtectedRoute>
              <DoctorsList />
            </ProtectedRoute>} />
        <Route
          path='/doctor-profile/:userId'
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>} />
      </Routes>
    </Router>
  )
}

export default App;
