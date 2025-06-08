import React from 'react'
import { Link } from 'react-router-dom'

function HeaderItem({ label, link, active }) {
  return (
    <li>
      <Link
        to={link}
        className={`px-4 py-2 rounded transition-colors duration-200
          ${active
            ? 'bg-indigo-900 text-indigo-300'
            : 'text-white'}
        `}
      >
        {label}
      </Link>
    </li>
  )
}

export default HeaderItem