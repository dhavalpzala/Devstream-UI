import React from 'react'
import { getQueryParameterByName } from '../utils/functions'

export default class CasAuth extends React.Component {
  componentDidMount () {
    var ticket = getQueryParameterByName('ticket');
    if (ticket) {
      if(ticket && window.opener && window.opener.setCasAccessToken) {
        window.opener.setCasAccessToken(ticket)
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
