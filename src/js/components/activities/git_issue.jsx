import React from 'react'
import ActivityLogo from './activity_logo'
import ACTIVITY_TYPES from '../../constants/activity_types'

const GitIssueActivity = (props) => (
  <div className="activity git-commit">
    <ActivityLogo activityType= { ACTIVITY_TYPES.GIT_ISSUE } />
    <div className="activity-content">
      <div className="activity-header">{ props.data.header }</div> 
      <div className="activity-description">{ props.data.description }</div>
    </div> 
  </div>
)

export default GitIssueActivity
