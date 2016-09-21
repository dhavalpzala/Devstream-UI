import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import App from './components/app'
import Home from './components/home'
import GithubAuth from './components/github-auth'

ReactDOM.render((
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home} />
            <Route path="github-auth" component={GithubAuth}/>
        </Route>
    </Router>
), document.getElementById('react-container'))