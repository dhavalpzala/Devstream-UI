import React from 'react'
import ActivityLogo from './activity_logo'
import ACTIVITY_TYPES from '../../constants/activity_types'
import moment from 'moment'

const GitPullRequestActivity = (props) => (
  <div className="activity git-commit">
    <ActivityLogo activityType= { ACTIVITY_TYPES.GIT_PULL_REQUEST } />
    <div className="activity-content">
      <div className="activity-header">
        <span className="username">{props.user.firstName} {props.user.lastName}</span> created pull request <span className="pr-number">#{props.data.payload.number}</span> at <span className="project">{props.data.repo.name}</span>
        <span className="time">{moment(props.time, 'X').fromNow()}</span>
      </div> 
      <div className="activity-description">
        <div className="pr-info">
          <div>
            <div className="action">{props.data.payload.action}</div>
            <div className="title">{props.data.payload.title}</div>
          </div>
          <div className="stats">
            with {props.data.payload.stats.commits} commits, {props.data.payload.stats.additions} additions and {props.data.payload.stats.deletions} deletions
          </div>
        </div>
      </div>
    </div> 
  </div>
)

export default GitPullRequestActivity
