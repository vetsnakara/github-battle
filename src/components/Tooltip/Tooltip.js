import React from 'react'
import Hover from '../Hover'

import useStyles from './styles'

const Tooltip = ({ text, children }) => {
  const classes = useStyles()

  return (
    <Hover>
      {hover => (
        <div className={classes.container}>
          {hover && <div className={classes.tooltip}>{text}</div>}
          {children}
        </div>
      )}
    </Hover>
  )
}

export default Tooltip
