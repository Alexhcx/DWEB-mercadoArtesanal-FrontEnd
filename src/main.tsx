import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import App from './App.tsx'
import Contato from './routes/contato.tsx'
import Quemsomos from './routes/quemsomos.tsx'
import Produtos from './routes/produtos.tsx'

const root = document.getElementById('root');

if (root !== null) {
  createRoot(root).render(
    <React.StrictMode>
      <Router>
        <Routes>
          <Route path="*" element={<App />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/quemsomos" element={<Quemsomos />} />
          <Route path="/produtos" element={<Produtos />} />
        </Routes>
      </Router>
    </React.StrictMode>
  );
}