import { createUseStyles } from 'react-jss'

export default createUseStyles(theme => {
  return {
    form: {
      flexBasis: 0,
      flexGrow: 1,
      margin: '0 20px'
    },

    label: {
      display: 'block',
      fontSize: 20,
      margin: '10px 0',
      fontWeight: 300,
      textAlign: 'left'
    },

    inputGroup: {
      display: 'flex',
      flexDirection: 'row'
    },

    input: {
      flexGrow: 1,
      marginRight: 10,
      padding: 8,
      fontSize: 16,
      borderRadius: 3,
      border: 'none',
      boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.15)',
      backgroundColor: theme.input.backgroundColor,
      color: 'inherit'
    },

    button: {
      flexGrow: 0.5,
      textTransform: 'uppercase',
      border: 'none',
      letterSpacing: '0.25em',
      fontSize: 16,
      fontWeight: 300,
      cursor: 'pointer',
      color: theme.button.color,
      backgroundColor: theme.button.backgroundColor,
      borderRadius: 3,

      '&:disabled': {
        backgroundColor: theme.button.disabled.backgroundColor,
        color: theme.button.disabled.color,
        cursor: 'not-allowed'
      }
    }
  }
})
