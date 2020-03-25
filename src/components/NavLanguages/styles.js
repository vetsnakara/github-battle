import { createUseStyles } from 'react-jss'

export default createUseStyles({
  navList: {
    display: 'flex',
    justifyContent: 'center',
    margin: '20px 0'
  },

  navItem: {
    marginRight: 10
  },

  navBtn: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'inherit',
    border: 'none',
    backgroundColor: 'transparent',
    cursor: 'pointer'
  },

  navBtnActive: {
    color: '#bb2e1f'
  }
})
