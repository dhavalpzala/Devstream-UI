import React from 'react'
import SocialConstants from '../constants/social-auth'

export default class Github extends React.Component {
  render () {
    return (
      <button onClick={this.openWindow}>Github</button>
    )
  }

  openWindow () {
    const clientId = SocialConstants.GITHUB.CLIENT_ID,
      redirect_uri = window.location.origin + '/github-auth',
      state = 'DCEeFWf45A53sdfKef424',
      scope = 'user user:email';

    window.setGithubAccessToken = function (accessToken) {
      if(accessToken) {
        console.log(accessToken);
      }
    }

    let url = `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=${encodeURIComponent(redirect_uri)}&state=${state}&scope=${encodeURIComponent(scope)}`

    window.open(url, '_githubAuth', 'resizable,scrollbars,status');
  }
}
