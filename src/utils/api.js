/* global fetch */

export const fetchPopularRepos = language => {
  const endpoint = `https://api.github.com/search/repositories?q=stars:>1+language:${language}&sort=stars&order=desc&type=Repositories`

  return fetch(endpoint)
    .then(res => res.json())
    .then(data => {
      if (!data.items) {
        throw new Error(data.message)
      }
      return data.items
    })
}

export const battle = players => Promise.all([
  getUserData(players[0]),
  getUserData(players[1])
]).then(results => sortPlayers(results))

const getUserProfile = username => {
  return fetch(`https://api.github.com/users/${username}`)
    .then(res => res.json())
    .then(profile => {
      if (profile.message) {
        throw new Error(`User ${username} not found`)
      }
      return profile
    })
}

const sortPlayers = players => players.sort((a, b) => b.score - a.score)

const getUserRepos = username => {
  return fetch(`https://api.github.com/users/${username}/repos?per_page=100`)
    .then(res => res.json())
    .then(repos => {
      if (repos.message) {
        throw new Error(`User ${username} not found`)
      }
      return repos
    })
}

const getStarCount = repos => repos.reduce(
  (count, { stargazers_count: stargazersCount }) => count + stargazersCount, 0
)

const calculateScore = (followers, repos) => {
  return followers * 3 + getStarCount(repos)
}

export const getUserData = user => {
  return Promise.all([
    getUserProfile(user),
    getUserRepos(user)
  ]).then(([profile, repos]) => ({
    profile,
    score: calculateScore(profile.followers, repos)
  }))
}
