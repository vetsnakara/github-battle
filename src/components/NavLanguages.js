import React from 'react'

const NavLanguages = ({
  selected,
  onLanguageSelect
}) => {
  const languages = [
    'All',
    'JavaScript',
    'Ruby',
    'Java',
    'CSS',
    'Python'
  ]

  const handleClick = (e, lang) => {
    e.preventDefault()
    onLanguageSelect(lang)
  }

  return (
    <ul>
      {languages.map(lang => {
        const style = {
          color: lang === selected ? 'red' : null
        }

        return (
          <li key={lang}>
            <a style={style} onClick={e => handleClick(e, lang)}>{lang}</a>
          </li>)
      })}
    </ul>
  )
}

export default NavLanguages
