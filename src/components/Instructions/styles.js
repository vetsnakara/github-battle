import { createUseStyles } from 'react-jss'

export default createUseStyles({
  container: {
    margin: '100px 0'
  },

  header: {
    textAlign: 'center',
    fontSize: 35,
    fontWeight: 300,
    margin: 20
  },

  stepList: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around'
  },

  stepItem: {
    flexBasis: 300,
    flexGrow: 1,
    textAlign: 'center'
  },

  stepTitle: {
    fontSize: 28,
    fontWeight: 300,
    margin: 10
  },

  stepIcon: {
    backgroundColor: '#00000014',
    borderRadius: 3,
    padding: 30,
    boxSizing: 'content-box'
  },

  iconUsers: {
    color: '#ffbf74'
  },

  iconBattle: {
    color: '#727272'
  },

  iconWinners: {
    color: '#ffd700'
  }
})
