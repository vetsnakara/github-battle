import React from 'react'
import cn from 'classnames'

import useStyle from './styles'

const NavLanguages = ({
  selected,
  onLanguageSelect
}) => {
  const classes = useStyle()

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
    <ul className={classes.navList}>
      {languages.map(lang => {
        const navBtnClasses = cn(
          classes.navBtn,
          {
            [classes.navBtnActive]: lang === selected
          }
        )

        return (
          <li className={classes.navItem} key={lang}>
            <button className={navBtnClasses} onClick={e => handleClick(e, lang)}>{lang}</button>
          </li>)
      })}
    </ul>
  )
}

export default NavLanguages
