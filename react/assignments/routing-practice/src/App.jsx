import { useState } from 'react'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import './App.css'
import Home from './components/home'
import Params from './components/params'
import React from "react";
import { useParams } from "react-router-dom";




function App() {
  return (
    <BrowserRouter>
    <div className='App'>
      <Routes>
        <Route path='/Home' element={<Home />}/>
        <Route path='/:word' element={<Params />}/>
        <Route path='/:word/:color/:bgcolor' element={<Params />}/>
      </Routes>
    </div>
    </BrowserRouter>
  )
}


export default App
