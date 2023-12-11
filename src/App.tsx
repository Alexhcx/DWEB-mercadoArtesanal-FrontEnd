import { useState } from 'react'

import Home from './routes/home'
import Produtos from './routes/produtos'
import Quemsomos from './routes/quemsomos'
import Contato from './routes/contato'

import { Routes, Route } from 'react-router-dom';

function App() {

  return (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/produtos" element={<Produtos />} />
          <Route path="/quemsomos" element={<Quemsomos />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
  )
}

export default App