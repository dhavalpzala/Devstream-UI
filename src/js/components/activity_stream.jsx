import React from 'react'
import appStoreInstance from '../stores/app.store'
import AppService from '../services/app.service'
import ACTIVITY_TYPES from '../constants/activity_types'
import GitCommitActivity from './activities/git_commit'
import GitIssueActivity from './activities/git_issue'
import GitPullRequestActivity from './activities/git_pull_request'

export default class ActivityStream extends React.Component {
  constructor(props) {
    super(props)
    
    this.state = {
      activities: AppService.getActivities(),
      lastTimestamp: +(new Date())
    }
  }

  render() {
    const activities = []
    if (this.state.activities) {
      this.state.activities.forEach((activity, idx) => {
        console.log(activity)
        switch (activity.type) {
          case ACTIVITY_TYPES.GIT_COMMIT:
            activities.push(<GitCommitActivity key={activity.event.id} data={activity.event} user={activity.userPayload} />)
            break
          case ACTIVITY_TYPES.GIT_ISSUE:
            activities.push(<GitIssueActivity key={activity.event.id} data={activity.event} user={activity.userPayload} />)
            break
          case ACTIVITY_TYPES.GIT_PULL_REQUEST:
            activities.push(<GitPullRequestActivity key={activity.event.id} data={activity.event} user={activity.userPayload} />)
            break
          default:
            throw new Error(`Unknown activity type: ${activity.type}`)
        }
      })
    }
    console.log(activities)

    return (
      <div className="activities">
        {activities}
      </div>
    )
  }
}

ActivityStream.defaultProps = {
  limit: 30
}
