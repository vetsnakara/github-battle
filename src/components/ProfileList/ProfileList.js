import React from 'react'
import {
  FaCompass,
  FaBriefcase,
  FaUsers,
  FaUserFriends,
  FaCode,
  FaUser
} from 'react-icons/fa'

import Tooltip from '../Tooltip'

import useStyles from './styles'

const ProfileList = ({ profile }) => {
  const classes = useStyles()

  return (
    <ul className={classes.list}>
      <li>
        <FaUser color='rgb(239, 115, 115)' />
        {profile.name}
      </li>

      {profile.location && (
        <li>
          <Tooltip text="User's location">
            <FaCompass color='rgb(144, 116, 255)' />
            {profile.location}
          </Tooltip>
        </li>
      )}

      {profile.company && (
        <li>
          <FaBriefcase color='#795548' />
          {profile.company}
        </li>
      )}

      <li>
        <FaUsers color='rgb(129, 195, 245)' />
        {profile.followers} followers
      </li>

      <li>
        <FaUserFriends color='rgb(64, 183, 95)' />
        {profile.following} following
      </li>

      <li>
        <FaCode />
        {profile.public_repos} repositories
      </li>
    </ul>
  )
}

export default ProfileList
