import React from 'react'
import Github from './authentication/github'
import Cas from './authentication/cas'
import StackOverflow from './authentication/stackoverflow'
import appStoreInstance from '../stores/app.store'
import ACTIVITY_TYPES from '../constants/activity_types'
import GitCommitActivity from './activities/git_commit'

export default class Home extends React.Component {

  constructor () {
    super()

    this.state = {
      activities: appStoreInstance.activities 
    }
  }

  componentDidMount () {
    appStoreInstance.addChangeListener(() => {
      this.setState({
        activities: appStoreInstance.activities 
      })
    })
  }

  render () {
    let activities = []

    if (this.state.activities) {
      this.state.activities.forEach((activity) => {
        switch (activity.type) {
          case ACTIVITY_TYPES.GIT_COMMIT:
            activities.push(<GitCommitActivity key={ activity.id } data={ activity.data } />)
            break
        }
      })
    }
    
    return (<div>
      <Github/><Cas/><StackOverflow/>
      <div className='activities'>{ activities }</div>
    </div>)
  } 
}