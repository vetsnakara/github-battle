import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Instructions from './Instructions'
import PlayerInput from './PlayerInput'
import PlayerPreview from './PlayerPreview'

class Battle extends Component {
  state = {
    playerOne: null,
    playerTwo: null
  }

  handleSubmit = (id, player) => this.setState({ [id]: player })

  handleReset = id => this.setState({ [id]: null })

  render () {
    const { playerOne, playerTwo } = this.state

    return (
      <>
        <Instructions />

        <div>
          {playerOne
            ? (
              <PlayerPreview
                label='Player One'
                username={playerOne}
                onReset={() => this.handleReset('playerOne')}
              />
            ) : (
              <PlayerInput
                label='Player One'
                onSubmit={playerName => this.handleSubmit('playerOne', playerName)}
              />
            )}

          {playerTwo
            ? (
              <PlayerPreview
                label='Player Two'
                username={playerTwo}
                onReset={() => this.handleReset('playerTwo')}
              />
            ) : (
              <PlayerInput
                label='Player Two'
                onSubmit={playerName => this.handleSubmit('playerTwo', playerName)}
              />
            )}

          {playerOne && playerTwo && (
            <Link to={{
              pathname: '/battle/results',
              search: `?playerOne=${playerOne}&playerTwo=${playerTwo}`
            }}
            >
              Battle
            </Link>
          )}
        </div>
      </>
    )
  }
}

export default Battle
