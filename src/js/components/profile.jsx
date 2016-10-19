import React from 'react'
import Github from './authentication/github'
import StackOverflow from './authentication/stackoverflow'
import appStoreInstance from '../stores/app.store'
import AppAction from '../actions/app.action'
import PROVIDERS from '../constants/providers'
import PunchCard from './punch_card'

export default class Profile extends React.Component {
  constructor () {
    super()

    const { user: { firstName = '', lastName = '' }, profiles, profileImageUrl } = appStoreInstance
    
    this.state = { firstName, lastName, profiles, profileImageUrl }
  }

  componentDidMount () {
    appStoreInstance.addProfileChangeListener(() => {
      this.setState({
        profiles: appStoreInstance.profiles
      })
    })
  }
  
  render() {
    let profiles = []

    for (let provider in PROVIDERS) {
      if (PROVIDERS.hasOwnProperty(provider)) {
        let providerName = PROVIDERS[provider]

        profiles.push(<div key={ `profile-${providerName}`} className="profile-social">
          <div className="profile-social-title"> { providerName }</div>
          <div className="profile-social-content">
            {(() => {
              if (this.state.profiles[providerName]) {
                let userName = this.state.profiles[providerName].userName,
                  url = this.state.profiles[providerName].url 
                return(<div className="profile-social-username"><a target="blank" href={ url }>{ userName }</a></div>)
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
          <div className="profile-image">
            {(() => {
              if (this.state.profileImageUrl) {
                return (<img src={ this.state.profileImageUrl }/>)
              } else {
                return (<i className="fa fa-user" aria-hidden="true"></i>)
              }
            })()}
          </div>
          <div className="profile-name">{ this.state.firstName + ' ' + this.state.lastName }</div>
        </div>
        <div>
          { profiles }
        </div>
        <div className="punch-card-container">
          <PunchCard />
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
    AppAction.updateUserProfile(provider, accessToken)
  }

  unlink(provider) {
    AppAction.deleteUserProfile(provider)
  }
}
