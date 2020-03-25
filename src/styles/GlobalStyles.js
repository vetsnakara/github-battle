import { createUseStyles, useTheme } from 'react-jss'

const useStyles = createUseStyles(theme => ({
  '@global': {
    html: {
      boxSizing: 'border-box',
      font: {
        family: ['Roboto', 'Arial', 'sans-serif'],
        size: 16
      }
    },

    body: {
      margin: 0,
      padding: 0,
      backgroundColor: theme.backgroundColor,
      color: theme.color
    },

    '*, *::before, *::after': {
      boxSizing: 'inherit'
    },

    'ul, ol': {
      margin: 0,
      padding: 0,
      listStyleType: 'none'
    }
  }
}))

export default () => {
  const theme = useTheme()
  useStyles({ theme })
  return null
}
