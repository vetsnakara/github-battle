import React from 'react'
import { ThemeProvider as JssThemeProvider } from 'react-jss'

import themeStyles from '../styles/theme'

export const ToggleThemeContext = React.createContext()

export const ThemeProvider = ({
  children
}) => {
  const [theme, setTheme] = React.useState('light')

  const toggleTheme = () =>
    setTheme(theme =>
      theme === 'light' ? 'dark' : 'light'
    )

  const themeContextValue = {
    theme,
    toggleTheme
  }

  return (
    <ToggleThemeContext.Provider value={themeContextValue}>
      <JssThemeProvider theme={themeStyles[theme]}>
        {children}
      </JssThemeProvider>
    </ToggleThemeContext.Provider>
  )
}
