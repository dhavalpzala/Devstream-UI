import React from 'react'
import SocialConstants from '../constants/social-auth'
import { GithubUrl } from '../constants/proxy'
import request from 'superagent'
import { getCode } from '../utils/functions'

export default class GithubAuth extends React.Component {
  componentDidMount () {
    var code = getCode('code');
    if(code) {
        const clientId = SocialConstants.GITHUB.CLIENT_ID,
          clientSecret = SocialConstants.GITHUB.CLIENT_SECRET,
          redirect_uri = window.location.origin + '/github-auth',
          state = 'DCEeFWf45A53sdfKef424',
          url = `${GithubUrl}/login/oauth/access_token?state=${state}&code=${code}&client_id=${clientId}&redirect_uri=${encodeURIComponent(redirect_uri)}&client_secret=${clientSecret}`

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
