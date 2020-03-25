import { createUseStyles } from 'react-jss'

export default createUseStyles({
  card: {
    width: 290,
    padding: 20,
    margin: '10px 0',
    backgroundColor: '#00000014',
    borderRadius: 3,

    '& a': {
      textDecoration: 'none'
    }
  },

  header: {
    textAlign: 'center',
    fontSize: 35,
    fontWeight: 300,
    margin: 20
  },

  subHeader: {
    textAlign: 'center'
  },

  title: {
    textAlign: 'center',
    fontWeight: 'bold',

    '& a': {
      color: '#bb2e1f'
    }
  },

  image: {
    display: 'block',
    width: 150,
    height: 150,
    borderRadius: 3,
    margin: '0 auto',
    marginBottom: 8
  }
})
