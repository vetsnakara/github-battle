import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import Nav from './components/Nav'
import Popular from './components/Popular'
import Battle from './components/Battle'
import Results from './components/Results'

class App extends Component {
  render () {
    return (
      <Router>
        <Nav />
        <Switch>
          <Route path='/' exact component={Popular} />
          <Route path='/battle' exact component={Battle} />
          <Route path='/battle/results' component={Results} />
        </Switch>
      </Router>
    )
  }
}

export default App
