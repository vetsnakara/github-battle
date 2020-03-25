import { createUseStyles } from 'react-jss'

export default createUseStyles({
  list: {
    fontSize: 20,

    '& li': {
      margin: 10
    },

    '& svg': {
      marginRight: 10
    },

    '& a': {
      color: '#000',
      fontWeight: 'bold'
    }
  }
})
