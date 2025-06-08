import { Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './header/Header'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Research from './pages/Research'
import Contact from './pages/Contact'

function App() {
  return (
    <div>
      <Header />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/research" element={<Research />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
