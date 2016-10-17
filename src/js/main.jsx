import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import AppAction from './actions/app.action'
import App from './components/app'
import Home from './components/home'
import Profile from './components/profile'
import User from './components/user'
import NotFound from './components/not_found'
import GithubAuth from './components/authentication/github_auth'
import CasAuth from './components/authentication/cas_auth'
import StackOverflowAuth from './components/authentication/stackoverflow_auth'
import Artist from './components/easter_eggs/artist'

// import styles
import '../styles/app.scss'

// for supporting deep linking to browserHistory
__webpack_public_path__ = "/"

function requireAuth(nextState, replace) {
  if (!AppAction.isLoggedIn()) {
    replace({
      pathname:'/'
    })
  }
}

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="github-auth" component={GithubAuth}/>
      <Route path="cas-auth" component={CasAuth}/>
      <Route path="stackoverflow-auth" component={StackOverflowAuth}/>
      <Route path="profile" component={Profile} onEnter={requireAuth}/>
      <Route path="user/:id" component={User}/>
      <Route path="artist" component={Artist}/>
      <Route path="*" component={NotFound} />
    </Route>
  </Router>
), document.getElementById('react-container'))
