import { useState } from 'react'
import Header from './components/Header'
import Home from './components/Home'
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom'
import About from './components/About'

function App() {
  return (
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  </Router>
  )
}

export default App
