import React from 'react'

import {
  FaUser,
  FaStar,
  FaCodeBranch,
  FaExclamationTriangle
} from 'react-icons/fa'

import Tooltip from '../Tooltip'

import useStyles from './styles'

const RepoList = ({
  login,
  stargazersCount,
  forks,
  openIssues
}) => {
  const classes = useStyles()

  return (
    <ul className={classes.list}>
      <li>
        <Tooltip text='Github usename'>
          <FaUser color='rgb(255, 191, 116)' />
          <a
            href={`https://github.com/${login}`}
            target='_blank'
            rel='noopener noreferrer'
          >{login}
          </a>
        </Tooltip>
      </li>
      <li>
        <FaStar color='rgb(255, 215, 0)' />
        {stargazersCount} stars
      </li>
      <li>
        <FaCodeBranch color='rgb(129, 195, 245)' />
        {forks} forks
      </li>
      <li>
        <FaExclamationTriangle color='rgb(241, 138, 147)' />
        {openIssues} open issues
      </li>
    </ul>
  )
}

export default RepoList
