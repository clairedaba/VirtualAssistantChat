import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './views/HomePage.js';
import Login from './views/Login.js';
import SignUp from './views/SignUp.js';
import chat from './views/Chat.js';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path='/chat' element={<chat/>}/>
      </Routes>
    </Router>
  );
}

export default App;
