import React from "react";
import { Routes, Route } from "react-router-dom";
import './App.css'
import Login from './Auth/login'
import Register from './Auth/register'
function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
     
    </>
  )
}

export default App;
