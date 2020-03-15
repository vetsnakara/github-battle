import React from 'react'

import { fetchPopularRepos } from '../utils/api'

import NavLanguages from './NavLanguages'
import ReposGrid from './ReposGrid'

class Popular extends React.Component {
  state = {
    selectedLanguage: 'All',
    repos: {},
    error: null,
    loading: false
  }

  componentDidMount () {
    const { selectedLanguage } = this.state
    this.updateRepos(selectedLanguage)
  }

  componentDidUpdate (prevProps, prevState) {
    const { selectedLanguage, repos: { [selectedLanguage]: languageRepos } } = this.state
    if (selectedLanguage !== prevState.selectedLanguage && !languageRepos) {
      this.updateRepos(selectedLanguage)
    }
  }

  updateRepos = language => {
    this.setState({
      loading: true
    })

    fetchPopularRepos(language)
      .then(data => this.setState(({ repos }) => ({
        repos: {
          ...repos,
          [language]: data
        },
        loading: false
      })))
      .catch(error => {
        console.warn('Error fetching repos:', error)
        this.setState({
          error: 'Some error occurs through fetching repos :(((',
          loading: false
        })
      })
  }

  handleLanguageSelect = selectedLanguage => {
    this.setState({
      selectedLanguage,
      error: null
    })
  }

  render () {
    const {
      selectedLanguage,
      repos: { [selectedLanguage]: languageRepos = [] },
      error,
      loading
    } = this.state

    if (loading) {
      return <p>Loading ...</p>
    }

    if (error) {
      return <p>Something went wrong ...</p>
    }

    return (
      <>
        <NavLanguages
          selected={selectedLanguage}
          onLanguageSelect={this.handleLanguageSelect}
        />
        <ReposGrid repos={languageRepos} />
      </>
    )
  }
}

export default Popular
