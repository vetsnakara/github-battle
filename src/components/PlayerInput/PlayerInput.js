import React from 'react'

import useStyles from './styles'

const PlayerInput = ({
  label,
  onSubmit
}) => {
  const [name, setName] = React.useState('')
  const classes = useStyles()

  const handleSubmit = e => {
    e.preventDefault()
    onSubmit(name)
  }

  const handleChange = ({ target: { value: name } }) => {
    setName(name)
  }

  return (
    <form
      className={classes.form}
      onSubmit={handleSubmit}
    >
      <label
        className={classes.label}
      >
        {label}
      </label>

      <div className={classes.inputGroup}>
        <input
          className={classes.input}
          type='text'
          id='username'
          placeholder='Github username'
          autoComplete='off'
          value={name}
          onChange={handleChange}
        />

        <button
          className={classes.button}
          type='submit'
          disabled={!name}
        >
          Submit
        </button>
      </div>
    </form>
  )
}

export default PlayerInput
