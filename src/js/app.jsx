import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'
import Home from './components/home'
import GithubAuth from './components/github-auth'

class App extends React.Component {
  render() {
    return <div>
      <Router history={ browserHistory }>
        <Route path='/' component={ Home } />
        <Route path='/github-auth' component={ GithubAuth } />
      </Router>
    </div>
  }
}

ReactDOM.render(<App/>, document.getElementById('react-container'))