import { createUseStyles } from 'react-jss'

export default createUseStyles({
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  navList: {
    display: 'flex'
  },

  navItem: {
    marginRight: 10
  },

  navLink: {
    fontSize: 18,
    fontWeight: 'bold',
    textDecoration: 'none',
    color: 'inherit'
  },

  navLinkActive: {
    color: '#bb2e1f'
  },

  toggleThemeBtn: {
    backgroundColor: 'transparent',
    border: 'none',
    fontSize: 30,
    cursor: 'pointer'
  }
})
