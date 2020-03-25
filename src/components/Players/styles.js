import { createUseStyles } from 'react-jss'

export default createUseStyles({
  container: {
    margin: '100px 0 80px'
  },

  header: {
    textAlign: 'center',
    fontSize: 35,
    fontWeight: 300,
    margin: 20
  },

  playersContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',

    '& > *': {
      flexGrow: 1,
      flexBasis: 0,
      margin: '0 10px'
    }
  }
})
