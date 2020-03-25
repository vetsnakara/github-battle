import React from 'react'

import PlayerInput from '../PlayerInput/PlayerInput'
import PlayerPreview from '../PlayerPreview/PlayerPreview'

import useStyles from './styles'

const Players = ({
  playerOne,
  playerTwo,
  onReset,
  onSubmit
}) => {
  const classes = useStyles()

  return (
    <div className={classes.container}>
      <h2 className={classes.header}>Players</h2>

      <div className={classes.playersContainer}>
        {playerOne
          ? (
            <PlayerPreview
              label='Player One'
              username={playerOne}
              onReset={() => onReset('playerOne')}
            />
          ) : (
            <PlayerInput
              label='Player One'
              onSubmit={playerName => onSubmit('playerOne', playerName)}
            />
          )}

        {playerTwo
          ? (
            <PlayerPreview
              label='Player Two'
              username={playerTwo}
              onReset={() => onReset('playerTwo')}
            />
          ) : (
            <PlayerInput
              label='Player Two'
              onSubmit={playerName => onSubmit('playerTwo', playerName)}
            />
          )}
      </div>
    </div>
  )
}

export default Players
