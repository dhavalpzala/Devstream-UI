import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import App from './components/app'
import Home from './components/home'
import GithubAuth from './components/authentication/github_auth'
import CasAuth from './components/authentication/cas_auth'
import StackOverflowAuth from './components/authentication/stackoverflow_auth'

// import css files
import '../css/app.scss'

// for supporting deep linking to browserHistory
__webpack_public_path__ = "/"

ReactDOM.render((
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home} />
            <Route path="github-auth" component={GithubAuth}/>
            <Route path="cas-auth" component={CasAuth}/>
            <Route path="stackoverflow-auth" component={StackOverflowAuth}/>
        </Route>
    </Router>
), document.getElementById('react-container'))