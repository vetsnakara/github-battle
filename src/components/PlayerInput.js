import React, { Component } from 'react'

class PlayerInput extends Component {
  state = {
    username: ''
  }

  handleSubmit = () => {
    const { username } = this.state
    const { onSubmit } = this.props

    onSubmit(username)
  }

  handleChange = ({ target: { value } }) => {
    this.setState({ username: value })
  }

  render () {
    const { username } = this.state
    const { label } = this.props

    return (
      <form onSubmit={this.handleSubmit}>
        <label>{label}</label>

        <div>
          <input
            type='text'
            id='username'
            placeholder='Github username'
            autoComplete='off'
            value={username}
            onChange={this.handleChange}
          />

          <button
            type='submit'
            disabled={!username}
          >
            Submit
          </button>
        </div>
      </form>
    )
  }
}

export default PlayerInput
