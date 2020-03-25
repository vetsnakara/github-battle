import { createUseStyles } from 'react-jss'

export default createUseStyles({
  label: {
    display: 'block',
    fontSize: 20,
    margin: '10px 0 15px',
    fontWeight: 300,
    textAlign: 'left'
  },

  infoWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#00000014',
    padding: 10,
    borderRadius: 3
  },

  info: {
    display: 'flex',
    alignItems: 'center'
  },

  avatar: {
    width: 55,
    height: 55,
    borderRadius: '50%',
    marginRight: 10
  },

  name: {
    color: 'rgb(187, 46, 31)',
    textDecoration: 'none',
    fontWeight: 'bold'
  },

  resetBtn: {
    padding: 0,
    backgroundColor: 'transparent',
    border: 'none',
    cursor: 'pointer'
  }
})
