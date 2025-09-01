import { useState } from 'react'
import React from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import About from './pages/About'
import Hero1 from './components/Hero1'

function App() {

  return (
    <>
      <Hero1/>
      <Navbar/>
      <Footer/>
      <About/>
    </>
  )
}

export default App
