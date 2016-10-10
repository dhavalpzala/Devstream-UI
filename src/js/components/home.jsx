import React from 'react'
import appStoreInstance from '../stores/app.store'
import ACTIVITY_TYPES from '../constants/activity_types'
import GitCommitActivity from './activities/git_commit'
import ActivityStream from './activity_stream'
import TrendingProjects from './sidebar/trending_projects'
import TrendingUsers from './sidebar/trending_users'

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

    return (
      <div>
        <ActivityStream />
        <aside className="sidebar">
          <TrendingProjects limit="5" />
          <TrendingUsers limit="5" />
        </aside>
      </div>
    )
  } 
}
