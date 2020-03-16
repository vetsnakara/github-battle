import React from 'react'
import {
  FaCompass,
  FaBriefcase,
  FaUsers,
  FaUserFriends,
  FaCode,
  FaUser
} from 'react-icons/fa'

const ProfileList = ({ profile }) => {
  return (
    <ul>
      <li>
        <FaUser />
        {profile.name}
      </li>

      {profile.location && (
        <li>
          <FaCompass />
          {profile.location}
        </li>
      )}

      {profile.company && (
        <li>
          <FaBriefcase />
          {profile.company}
        </li>
      )}

      <li>
        <FaUsers />
        {profile.followers} followers
      </li>

      <li>
        <FaUserFriends />
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
