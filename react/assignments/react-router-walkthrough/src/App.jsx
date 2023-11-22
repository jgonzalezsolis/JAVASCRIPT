import { useState } from 'react'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import  Params from './components/Params'







function App() {
  return (
    <BrowserRouter>
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>


      </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App
