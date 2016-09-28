import React from 'react'
import { GITHUB } from '../../constants/social_auth'
import request from 'superagent'
import { getQueryParameterByName } from '../../utils/functions'

export default class GithubAuth extends React.Component {
  componentDidMount () {
    var code = getQueryParameterByName('code');
    if (code) {
        const clientId = GITHUB.CLIENT_ID,
          clientSecret = GITHUB.CLIENT_SECRET,
          redirect_uri = GITHUB.REDIRECT_URI,
          state = 'DCEeFWf45A53sdfKef424',
          url = `${GITHUB.API_URL}/login/oauth/access_token?state=${state}&code=${code}&client_id=${clientId}&redirect_uri=${encodeURIComponent(redirect_uri)}&client_secret=${clientSecret}`

        request.post(url).end((err, res) => {
          const authToken = res.body.access_token

          if(authToken && window.opener && window.opener.setGithubAccessToken) {
            window.opener.setGithubAccessToken(authToken)
          }

          window.close()
        })
    }
  }

  render () {
      return (
          <div></div>
      );
  }
}
