import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import App from './components/app'
import Home from './components/home'
import GithubAuth from './components/github-auth'
import CasAuth from './components/cas-auth'

ReactDOM.render((
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home} />
            <Route path="github-auth" component={GithubAuth}/>
            <Route path="cas-auth" component={CasAuth}/>
        </Route>
    </Router>
), document.getElementById('react-container'))