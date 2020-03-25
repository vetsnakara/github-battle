import React from 'react'

import useStyles from './styles'

const Card = ({
  header,
  subheader,
  avatar,
  href,
  name,
  children
}) => {
  const classes = useStyles()

  return (
    <article className={classes.card}>
      <h4 className={classes.header}>{header}</h4>

      <img
        className={classes.image}
        src={avatar}
        alt={`Avatar for ${name}`}
      />

      {subheader && (
        <h4 className={classes.subHeader}>
          {subheader}
        </h4>
      )}

      <h2 className={classes.title}>
        <a className={classes.title} href={href} rel='noopener noreferrer' target='_blank'>{name}</a>
      </h2>

      {children}
    </article>
  )
}

export default Card
