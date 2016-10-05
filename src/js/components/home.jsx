import React from 'react'
import appStoreInstance from '../stores/app.store'
import ACTIVITY_TYPES from '../constants/activity_types'
import GitCommitActivity from './activities/git_commit'

export default class Home extends React.Component {
  constructor () {
    super()

    this.state = {
      activities: appStoreInstance.activities,
      projects: ["kodeBeagle", "Papyrus", "mViewer"] 
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
    let activities = [],
      projects = [] 

    if (this.state.activities) {
      this.state.activities.forEach((activity) => {
        switch (activity.type) {
          case ACTIVITY_TYPES.GIT_COMMIT:
            activities.push(<GitCommitActivity key={ activity.id } data={ activity.data } />)
            break
        }
      })
    }
    
    if (this.state.projects) {
      this.state.projects.forEach((project, idx) => {
        projects.push(<div className='trending-project'>#{ project }</div>)
      })
    }

    return (<div>
      <div className='activities'>{ activities }</div>
      <div className='trending-projects'>
        <div className="trending-projects-title">Trending Projects</div>
        { projects }
      </div>
    </div>)
  } 
}
