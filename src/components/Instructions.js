import React from 'react'

import {
  FaUserFriends,
  FaFighterJet,
  FaTrophy
} from 'react-icons/fa'

const Instructions = () => {
  return (
    <div>
      <h1>Instructions</h1>

      <ol>
        <li>
          <h3>Enter two Github users</h3>
          <FaUserFriends />
        </li>
        <li>
          <h3>Battle</h3>
          <FaFighterJet />
        </li>
        <li>
          <h3>See the winners</h3>
          <FaTrophy />
        </li>
      </ol>
    </div>
  )
}

export default Instructions
