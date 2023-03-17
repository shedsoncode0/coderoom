import './App.css';
import React from 'react';
import {
  Routes,
  Route,
} from "react-router-dom";

// import Signup from './pages/Signup';
// import Login from './pages/Login';
// import Layout from './components/Layout';
import Room from './pages/Room';
import Profile from './pages/Profile';

import Headre from './components/Headre';
import Navbar from './components/Navbar';
import Projects from './pages/Projects';
import ProjectReview from './pages/ProjectReview';
import Settings from './pages/Settings';

function App() {
  return (
    <div className='h-screen w-screen flex relative font-poppins'>
      <Navbar />
      <div className='w-full h-full flex flex-col overflow-y-scroll relative'>
        <Headre />
        <Routes>
          <Route path='/myroom' element={<Room/>} />
          <Route path='/profile' element={<Profile/>} />
          <Route path='/projects' element={<Projects/>} />
          <Route path='/projects/:id' element={<ProjectReview />} />
          <Route path='/settings' element={<Settings />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
