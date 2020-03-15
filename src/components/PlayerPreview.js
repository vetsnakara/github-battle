import React from 'react'

import { FaTimesCircle } from 'react-icons/fa'

const PlayerPreview = ({
  username,
  onReset,
  label
}) => {
  return (
    <div>
      <h3>{label}</h3>
      <div>
        <img
          src={`https://github.com/${username}.png?size=200`}
          alt={`Avatar for ${username}`}
        />
        <a
          href={`https://github.com/${username}`}
        >{username}
        </a>
        <button onClick={onReset}>
          <FaTimesCircle />
        </button>
      </div>
    </div>
  )
}

export default PlayerPreview
