import { createUseStyles } from 'react-jss'

export default createUseStyles({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    margin: '40px 0 50px'
  },

  buttons: {
    textAlign: 'center'
  },

  resetBtn: {
    backgroundColor: '#000',
    padding: '10px 60px',
    color: '#fff',
    textDecoration: 'none',
    textTransform: 'uppercase',
    borderRadius: 3,
    letterSpacing: '.3em'
  }
})
