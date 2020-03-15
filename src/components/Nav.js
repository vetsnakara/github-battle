import React from 'react'

import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to='/'>Popular</NavLink>
        </li>
        <li>
          <NavLink to='/battle'>Battle</NavLink>
        </li>
      </ul>
      <button>Toggle Theme</button>
    </nav>
  )
}

export default Nav
