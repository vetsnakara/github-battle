import React from 'react'

import Card from '../Card'
import RepoList from '../RepoList'

import useStyles from './styles'

const ReposGrid = ({ repos }) => {
  const classes = useStyles()

  return (
    <ul className={classes.grid}>
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
              <RepoList
                login={login}
                stargazersCount={stargazersCount}
                forks={forks}
                openIssues={openIssues}
              />
            </Card>
          </li>
        )
      })}
    </ul>
  )
}

export default ReposGrid
