import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import About from './About'
import Research from './Research'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  // Function to style active link with Tailwind classes
  const activeClassName = "underline decoration-2 decoration-blue-400"

  return (
    <>
      <BrowserRouter>
        <nav className="bg-gray-900 text-white p-4 flex items-center justify-center space-x-8 shadow-md">
          <NavLink
            to="/about"
            className={({ isActive }) =>
              "hover:text-blue-400 transition " + (isActive ? activeClassName : "")
            }
          >
            About
          </NavLink>
          <NavLink
            to="/research"
            className={({ isActive }) =>
              "hover:text-blue-400 transition " + (isActive ? activeClassName : "")
            }
          >
            Research
          </NavLink>
        </nav>

        <main className="p-6 max-w-4xl mx-auto">
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/research" element={<Research />} />
          </Routes>
        </main>
      </BrowserRouter>

      {/* The rest of your old content below */}
      <div>
        <a href="https://vite.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
