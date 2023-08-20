import React from 'react'
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import MobileHome from './mobileHome';


const App = () => {

  const [mode, setMode] = useState('white');

  const toggle = () => {

    if (mode === 'white') {
      setMode('black')
    }
    else {
      setMode('white')
    }

  };

  return (

    <Routes>
      <Route path='/' element={<MobileHome toggle={toggle} mode={mode} />} />
    </Routes>

  )
}

export default App
