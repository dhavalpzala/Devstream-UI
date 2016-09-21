import React from 'react'
import { CAS } from '../constants/social-auth'

export default class Cas extends React.Component {
  render () {
    return (
      <button onClick={this.openWindow}>CAS</button>
    )
  }

  openWindow () {
    const redirect_uri = CAS.REDIRECT_URI

    window.setCasAccessToken = function (accessToken) {
      if(accessToken) {
        console.log(accessToken);
      }
    }

    let url = `https://corridor.pramati.com/cas/login/?service=${redirect_uri}`

    window.open(url, '_casAuth', 'resizable,scrollbars,status');
  }
}
