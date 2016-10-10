import React from 'react'
import { GITHUB } from '../../constants/social_auth'

export default class Github extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <button onClick={ this.openWindow.bind(this) }>{ this.props.name }</button>
    )
  }

  openWindow () {
    const clientId = GITHUB.CLIENT_ID,
      redirect_uri = GITHUB.REDIRECT_URI,
      state = GITHUB.STATE,
      scope = GITHUB.SCOPE

    window.setGithubAccessToken = (accessToken) => {
      if(accessToken) {
        this.props.onAuthenticated(accessToken)
      }
    }

    let url = `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=${encodeURIComponent(redirect_uri)}&state=${state}&scope=${encodeURIComponent(scope)}`

    window.open(url, '_githubAuth', 'resizable,scrollbars,status')
  }
}
