import React from 'react'
import Github from './authentication/github'
import StackOverflow from './authentication/stackoverflow'
import appStoreInstance from '../stores/app.store'
import AppAction from '../actions/app.action'
import PROVIDERS from '../constants/providers'

export default class Profile extends React.Component {
  constructor () {
    super()

    const { user: { firstName = '', lastName = '' }} = appStoreInstance
    
    this.state = { firstName, lastName, profiles: this.getProfiles() }
  }

  getProfiles() {
    const userProfiles = AppAction.getProfiles(),
      profiles = {}

    if (userProfiles) {
      userProfiles.forEach((profile) => {
        profiles[profile.provider] = profile.userName
      })
    }

    return profiles
  }
  
  render() {
    let profiles = []

    for (let provider in PROVIDERS) {
      if (PROVIDERS.hasOwnProperty(provider)) {
        let providerName = PROVIDERS[provider]

        profiles.push(<div className="profile-social">
          <div className="profile-social-title"> { providerName }</div>
          <div className="profile-social-content">
            {(() => {
              let userName = this.state.profiles[providerName]  
              if (userName) {
                return(<div className="profile-social-username"> { userName }</div>)
              } else {
                switch (providerName) {
                  case PROVIDERS.GITHUB:
                    return (<Github name="Link" onAuthenticated= { this.linkGithub.bind(this) }/>)
                  case PROVIDERS.STACKOVERFLOW:
                    return (<StackOverflow name="Link" onAuthenticated= { this.linkStackOverflow.bind(this) }/>)
                }
              }
            })()}
          </div>
        </div>) 
      }
    }

    return (
      <div className="profile">
        <div>
          <div className="profile-image"></div>
          <div className="profile-name">{ this.state.firstName + ' ' + this.state.lastName }</div>
        </div>
        <div>
          { profiles }
        </div>
      </div>
    )
  }

  linkGithub(accessToken) {
    this.link(PROVIDERS.GITHUB, accessToken)
  }

  linkStackOverflow(accessToken) {
    this.link(PROVIDERS.STACKOVERFLOW, accessToken)    
  }

  link(provider, accessToken) {
    AppAction.updateUserProfile(provider, accessToken).then((res,  err) => {
      this.setState({
        profiles: this.getProfiles()
      })
    })
  }

  unlink(provider) {
    AppAction.deleteUserProfile(provider)
  }
}
