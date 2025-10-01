import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Home } from './Pages/Home.jsx'
import { Button } from './components/UI/Button.jsx'
import { Anchor } from './components/UI/Anchor.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { State } from './Pages/State.jsx'
import { Practica } from './Pages/Practica.jsx'
import { Effect } from './Pages/Effect.jsx'
import { Character } from './Pages/Character.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<p>About us</p>} />
        <Route path="/contact" element={<p>Contact</p>} />
        <Route path="/state" element={<State />} />
        <Route path="/practica" element={<Practica />} />
        <Route path="/Effect" element={<Effect/>} />
        <Route path="/character/:id" element={<Character/>} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
