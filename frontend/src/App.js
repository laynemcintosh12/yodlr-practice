import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./Components/Register";
import Admin from "./Components/Admin";
import Home from "./Components/Home";
import NavBar from "./NavBar";


function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <>
        <Routes>
          <Route path="/admin" element={<Admin />}/>
          <Route exact path="/signup" element={<Register />}/>
          <Route exact path="/" element={<Home />}/>
        </Routes>
        </>
      </BrowserRouter>
    </div>
  );
}

export default App;
