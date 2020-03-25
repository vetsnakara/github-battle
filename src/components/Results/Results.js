import React from 'react'
import { Link } from 'react-router-dom'

import Card from '../Card'
import ProfileList from '../ProfileList/ProfileList'
import Loading from '../Loading'

import queryString from 'query-string'

import { battle } from '../../utils/api'

import useStyles from './styles'

const Results = ({
  location
}) => {
  const [state, setState] = React.useState({
    winner: null,
    loser: null,
    error: null,
    loading: true
  })

  React.useEffect(() => {
    const { playerOne, playerTwo } =
      queryString.parse(location.search)

    battle([playerOne, playerTwo])
      .then(([winner, loser]) => {
        setState({
          winner,
          loser,
          loading: false
        })
      })
      .catch(({ message }) => {
        setState({
          error: message,
          loading: false
        })
      })
  }, [])

  const classes = useStyles()

  const { winner, loser, error, loading } = state

  return (
    loading
      ? <Loading text='Battle' />
      : (
        error
          ? <p>{error}</p>
          : (
            <div>
              <div className={classes.container}>
                <Card
                  header={winner.score === loser.score ? 'Tie' : 'Winner'}
                  subheader={`Score: ${winner.score}`}
                  avatar={winner.profile.avatar_url}
                  href={winner.profile.html_url}
                  name={winner.profile.login}
                >
                  <ProfileList profile={winner.profile} />
                </Card>
                <Card
                  header={winner.score === loser.score ? 'Tie' : 'Loser'}
                  subheader={`Score: ${loser.score}`}
                  avatar={loser.profile.avatar_url}
                  href={loser.profile.html_url}
                  name={loser.profile.login}
                >
                  <ProfileList profile={loser.profile} />
                </Card>
              </div>
              <div className={classes.buttons}>
                <Link
                  to='/battle'
                  className={classes.resetBtn}
                >
                  Reset
                </Link>
              </div>
            </div>
          )
      )
  )
}

export default Results
