import React from 'react'

import {
  FaUser,
  FaStar,
  FaCodeBranch,
  FaExclamationTriangle
} from 'react-icons/fa'

import Card from './Card'

const ReposGrid = ({ repos }) => {
  return (
    <ul>
      {repos.map((repo, index) => {
        const {
          name,
          owner: { login, avatar_url: avatarUrl },
          html_url: htmlUrl,
          stargazers_count: stargazersCount,
          forks,
          open_issues: openIssues
        } = repo

        return (
          <li key={htmlUrl}>
            <Card
              header={`# ${index + 1}`}
              avatar={avatarUrl}
              href={htmlUrl}
              name={name}
            >
              <ul>
                <li>
                  <FaUser />
                  <a href={`https://github.com/${login}`}>{login}</a>
                </li>
                <li>
                  <FaStar />
                  {stargazersCount} stars
                </li>
                <li>
                  <FaCodeBranch />
                  {forks} forks
                </li>
                <li>
                  <FaExclamationTriangle />
                  {openIssues} open issues
                </li>
              </ul>
            </Card>
          </li>
        )
      })}
    </ul>
  )
}

export default ReposGrid
