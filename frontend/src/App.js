import './App.css';
import React from 'react';
import {
  Routes,
  Route,
} from "react-router-dom";

// import Signup from './pages/Signup';
// import Login from './pages/Login';
// import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';

import Headre from './components/Headre';
import Navbar from './components/Navbar';
import Projects from './pages/Projects';

function App() {
  return (
    <div className='h-screen w-screen flex relative font-poppins'>
      <Navbar />
      <div className='w-full h-full flex flex-col overflow-y-scroll relative'>
        <Headre />
        <Routes>
          <Route path='/dashboard' element={<Dashboard/>} />
          <Route path='/profile' element={<Profile/>} />
          <Route path='/projects' element={<Projects/>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
