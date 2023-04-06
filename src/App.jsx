import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Contact from './components/Contact';
import Home from './components/Home';
import About from './components/About';
import Admin from './components/Admin';
import Profile from './components/Profile';
import { useState } from 'react';

export default function App() {

  const {userLogin , setUserLogin} = useState(true);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Home" element={<Home />}/>
        <Route path="/About" element={<About />}/>
        <Route path="/Contact" element={<Contact />}/>
        <Route path='/Admin' element={<Admin userlogin={userLogin}/>}/>
        <Route path='/Profile/:id' element={<Profile />}/>
      </Routes>
    </BrowserRouter>
  );

}

