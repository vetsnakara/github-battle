import React from 'react'
import cn from 'classnames'

import {
  FaUserFriends,
  FaFighterJet,
  FaTrophy
} from 'react-icons/fa'

import useStyles from './styles'

const Instructions = () => {
  const classes = useStyles()

  return (
    <div className={classes.container}>
      <h2 className={classes.header}>Instructions</h2>

      <ol className={classes.stepList}>
        <li className={classes.stepItem}>
          <h3 className={classes.stepTitle}>Enter two Github users</h3>
          <FaUserFriends
            className={cn(classes.stepIcon, classes.iconUsers)}
            size={100}
          />
        </li>
        <li className={classes.stepItem}>
          <h3 className={classes.stepTitle}>Battle</h3>
          <FaFighterJet
            className={cn(classes.stepIcon, classes.iconBattle)}
            size={100}
          />
        </li>
        <li className={classes.stepItem}>
          <h3 className={classes.stepTitle}>See the winners</h3>
          <FaTrophy
            className={cn(classes.stepIcon, classes.iconWinners)}
            size={100}
          />
        </li>
      </ol>
    </div>
  )
}

export default Instructions
