import React from 'react'
import { STACKOVERFLOW } from '../../constants/social_auth'

export default class StackOverflow extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <button onClick={ this.openWindow.bind(this) }>{ this.props.name }</button>
    )
  }

  openWindow () {
    const clientId = STACKOVERFLOW.CLIENT_ID,
      redirect_uri = STACKOVERFLOW.REDIRECT_URI,
      state = STACKOVERFLOW.STATE,
      scope = STACKOVERFLOW.SCOPE

    window.setStackAccessToken = (accessToken) => {
      if(accessToken) {
        this.props.onAuthenticated(accessToken)
      }
    }

    let url = `https://stackexchange.com/oauth/dialog?client_id=${clientId}&redirect_uri=${encodeURIComponent(redirect_uri)}&state=${state}&scope=${encodeURIComponent(scope)}`

    window.open(url, '_stackAuth', 'resizable,scrollbars,status')
  }
}
