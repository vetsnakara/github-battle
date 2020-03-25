import React from 'react'
import { Link } from 'react-router-dom'

import Instructions from '../Instructions'
import Players from '../Players'

import useStyles from './styles'

const Battle = () => {
  const [state, setState] = React.useState({
    playerOne: null,
    playerTwo: null
  })

  const classes = useStyles()

  const handleSubmit = (id, player) => setState(
    state => ({
      ...state,
      [id]: player
    })
  )

  const handleReset = id => setState(
    state => ({
      ...state,
      [id]: null
    })
  )

  const { playerOne, playerTwo } = state

  return (
    <div className={classes.container}>
      <Instructions />

      <Players
        playerOne={playerOne}
        playerTwo={playerTwo}
        onReset={handleReset}
        onSubmit={handleSubmit}
      />

      {playerOne && playerTwo && (
        <Link
          className={classes.battleBtn}
          to={{
            pathname: '/battle/results',
            search: `?playerOne=${playerOne}&playerTwo=${playerTwo}`
          }}
        >
          Battle
        </Link>
      )}
    </div>
  )
}

export default Battle
