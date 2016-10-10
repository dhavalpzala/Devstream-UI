import React from 'react'
import ActivityLogo from './activity_logo'
import ACTIVITY_TYPES from '../../constants/activity_types'

const GitPullRequestActivity = (props) => (
  <div className="activity git-commit">
    <ActivityLogo activityType= { ACTIVITY_TYPES.GIT_PULL_REQUEST } />
    <div className="activity-content">
      <div className="activity-header">
        <span className="username">{props.user.firstName} {props.user.lastName}</span> created a pull request at <span className="project">{props.data.repo.name}</span>
      </div> 
      <div className="activity-description">{ props.data.id }</div>
    </div> 
  </div>
)

export default GitPullRequestActivity
