import React from 'react'
import HeaderItem from './HeaderItem'
import { useLocation } from 'react-router-dom'

function Header() {
  const location = useLocation()
  const navLinks = [
    { label: 'Home', link: '/' },
    { label: 'About', link: '/about' },
    { label: 'Projects', link: '/projects' },
    { label: 'Research', link: '/research' },
    { label: 'Contact', link: '/contact' },
  ]

  return (
    <header className="bg-blue-1000 shadow-lg">
      <nav className="max-w-screen-xl mx-auto flex items-center justify-between px-6 py-3">
        <span className="text-2xl font-bold tracking-tight text-slate-100">Conan</span>
        <ul className="flex space-x-2 md:space-x-6">
          {navLinks.map(({ label, link }) => (
            <HeaderItem
              key={link}
              label={label}
              link={link}
              active={location.pathname === link}
            />
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Header