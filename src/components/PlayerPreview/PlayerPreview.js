import React from 'react'
import { FaTimesCircle } from 'react-icons/fa'

import useStyles from './styles'

const PlayerPreview = ({
  username,
  onReset,
  label
}) => {
  const classes = useStyles()

  return (
    <div>
      <h3 className={classes.label}>{label}</h3>
      <div className={classes.infoWrapper}>
        <div className={classes.info}>
          <img
            className={classes.avatar}
            src={`https://github.com/${username}.png?size=200`}
            alt={`Avatar for ${username}`}
          />
          <a
            className={classes.name}
            target='_blank'
            rel='noopener noreferrer'
            href={`https://github.com/${username}`}
          >{username}
          </a>
        </div>
        <button
          className={classes.resetBtn}
          onClick={onReset}
        >
          <FaTimesCircle size={26} color='rgb(194, 57, 42)' />
        </button>
      </div>
    </div>
  )
}

export default PlayerPreview
