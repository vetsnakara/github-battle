import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import queryString from 'query-string'

import { battle } from '../utils/api'

class Results extends Component {
  state = {
    winner: null,
    loser: null,
    error: null,
    loading: true
  }

  componentDidMount () {
    const { playerOne, playerTwo } =
      queryString.parse(this.props.location.search)

    battle([playerOne, playerTwo])
      .then(([winner, loser]) => {
        this.setState({
          winner,
          loser,
          loading: false
        })
      })
      .catch(({ message }) => {
        this.setState({
          error: message,
          loading: false
        })
      })
  }

  render () {
    const { error, loading } = this.state

    if (loading) {
      return <p>Loading ...</p>
    }

    if (error) {
      return <p>{error}</p>
    }

    return (
      <>
        <div>
          {/* <Card
            header={winner.score === loser.score ? 'Tie' : 'Winner'}
            subheader={`Score ${winner.score}`}
            avatar={winner.profile.avatar_url}
            href={winner.profile.html_url}
            name={winner.profile.login}
          >
            <ProfileList profile={winner.profile} />
          </Card>
          <Card
            header={winner.score === loser.score ? 'Tie' : 'Loser'}
            subheader={`Score ${loser.score}`}
            avatar={loser.profile.avatar_url}
            href={loser.profile.html_url}
            name={loser.profile.login}
          >
            <ProfileList profile={loser.profile} />
          </Card> */}
          <p>JSON.stringify(winner)</p>
          <p>JSON.stringify(loser)</p>
        </div>
        <Link to='/battle'>
          Reset
        </Link>
      </>
    )
  }
}

export default Results
