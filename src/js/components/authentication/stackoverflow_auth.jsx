import React from 'react'
import { getQueryParameterByName } from '../../utils/functions'

export default class StackOverflowAuth extends React.Component {
  componentDidMount () {
    var accessToken = getQueryParameterByName('access_token')
    if (accessToken) {
      if(accessToken && window.opener && window.opener.setStackAccessToken) {
        window.opener.setStackAccessToken(accessToken)
      }
      window.close()
    }
  }

  render () {
    return (
      <div></div>
    )
  }
}
