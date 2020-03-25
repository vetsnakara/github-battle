import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import { ThemeProvider } from './context/theme'

import Container from './layout/Container'
import GlobalStyles from './styles/GlobalStyles'
import Nav from './components/Nav/Nav'
import Popular from './components/Popular'
import Battle from './components/Battle/Battle'
import Results from './components/Results/Results'

class App extends Component {
  render () {
    return (
      <ThemeProvider>
        <GlobalStyles />
        <Router>
          <Container>
            <header>
              <Nav />
            </header>
            <main>
              <Switch>
                <Route path='/' exact component={Popular} />
                <Route path='/battle' exact component={Battle} />
                <Route path='/battle/results' component={Results} />
              </Switch>
            </main>
          </Container>
        </Router>
      </ThemeProvider>
    )
  }
}

export default App
