import React from 'react'

const Card = ({
  header,
  subheader,
  avatar,
  href,
  name,
  children
}) => {
  return (
    <>
      <h4>{header}</h4>

      <img
        src={avatar}
        alt={`Avatar for ${name}`}
      />

      {subheader && <h4>{subheader}</h4>}

      <h2>
        <a href={href}>{name}</a>
      </h2>

      {children}
    </>
  )
}

export default Card
