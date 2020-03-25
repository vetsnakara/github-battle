import React from 'react'

import useStyles from './styles'

const Loading = ({
  text = 'Loading',
  speed = 300
}) => {
  const [content, setContent] = React.useState(text)

  React.useEffect(() => {
    const interval = setInterval(() => {
      setContent(content => (
        content === `${text}...`
          ? text
          : `${content}.`
      ))
    }, speed)

    return () => clearInterval(interval)
  }, [])

  const classes = useStyles()

  return (
    <p className={classes.content}>{content}</p>
  )
}

export default Loading
