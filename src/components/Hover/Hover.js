import React from 'react'

const Hover = ({
  children
}) => {
  const [hover, setHover] = React.useState(false)

  const mouseOver = () => setHover(true)
  const mouseOut = () => setHover(false)

  return (
    <div
      onMouseOver={mouseOver}
      onMouseOut={mouseOut}
    >
      {children(hover)}
    </div>
  )
}

export default Hover
