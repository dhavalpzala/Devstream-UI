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
      activities: [],
      lastTimestamp: Math.floor(+(new Date())/1000),
      latestTimestamp: Math.floor(+(new Date())/1000)
    }
  }

  componentDidMount() {
    this.loadMoreActivities()
    this.autoRefresh()
  }

  componentWillUnmount() {
    window.clearInterval(this.refreshInterval)
  }

  autoRefresh() {
    this.refreshInterval = window.setInterval(() => { this.loadNewActivities() }, this.props.autoRefreshInterval * 1000)
  }

  loadMoreActivities() {
    AppService.getActivities({before: this.state.lastTimestamp}).then(activities => {
      this.setState({
        activities: this.state.activities.concat(activities),
        lastTimestamp: activities[activities.length - 1].createdAt,
        latestTimestamp: this.state.latestTimestamp
      })
    })
  }

  loadNewActivities() {
    AppService.getActivities({after: this.state.latestTimestamp}).then(activities => {
      if (activities && activities.length) {
        this.setState({
          activities: activities.concat(this.state.activities),
          latestTimestamp: activities[0].createdAt,
          lastTimestamp: this.state.lastTimestamp
        })
      }
    })
  }

  render() {
    const activities = []
    if (this.state.activities) {
      this.state.activities.forEach((activity, idx) => {
        switch (activity.type) {
          case ACTIVITY_TYPES.GIT_COMMIT:
            activities.push(<GitCommitActivity key={idx} time={activity.createdAt} data={activity.event} user={activity.user} />)
            break
          case ACTIVITY_TYPES.GIT_ISSUE:
            activities.push(<GitIssueActivity key={idx} time={activity.createdAt} data={activity.event} user={activity.user} />)
            break
          case ACTIVITY_TYPES.GIT_PULL_REQUEST:
            activities.push(<GitPullRequestActivity key={idx} time={activity.createdAt} data={activity.event} user={activity.user} />)
            break
          default:
            console.log(activity)
            //throw new Error(`Unknown activity type: ${activity.type}`)
        }
      })
    }

    return (
      <div className="activities">
        {activities}
        <div className="load-more" onClick={this.loadMoreActivities.bind(this)}>More</div>
      </div>
    )
  }
}

ActivityStream.defaultProps = {
  limit: 30,
  autoRefreshInterval: 30
}
