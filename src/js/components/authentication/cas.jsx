import React from 'react'
import { CAS } from '../../constants/social_auth'
import AppAction from '../../actions/app.action'
export default class Cas extends React.Component {
  render () {
    return (
      <div className="pointer" onClick={this.openWindow}>Login</div>
    )
  }

  openWindow () {
    const redirect_uri = CAS.REDIRECT_URI

    window.setCasAccessToken = function (accessToken) {
      if(accessToken) {
        AppAction.login(accessToken)
      }
    }

    let url = `https://corridor.pramati.com/cas/login/?service=${redirect_uri}`

    window.open(url, '_casAuth', 'resizable,scrollbars,status');
  }
}
