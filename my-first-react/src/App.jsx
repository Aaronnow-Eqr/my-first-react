import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  let saludo = "Hola Mundo"

  return (
    <section className='App'>
      <h1>Mi First React</h1>
      <Anchors href={"https://vite.dev"} />
      <div className='card'>
        <h2>{saludo}</h2>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Esto es irrelevante, pero es un parrafo al fin y al cabo.
      </p>
    </section>
  )
}

export default App
