import React from 'react'
import ActivityLogo from './activity_logo'
import ACTIVITY_TYPES from '../../constants/activity_types'
import moment from 'moment'

const GitIssueActivity = (props) => (
  <div className="activity git-commit">
    <ActivityLogo activityType= { ACTIVITY_TYPES.GIT_ISSUE } />
    <div className="activity-content">
      <div className="activity-header">
        <span className="username"><img className="avatar" src={props.user.imageURL} />{props.user.firstName} {props.user.lastName}</span> created issue <span className="issue-number">#{props.data.payload.number}</span> at <span className="project">{props.data.repo.name}</span>
        <span className="time">{moment(props.time, 'X').fromNow()}</span>
      </div>
      <div className="activity-description">
        <div className="issue-info">
          <div className="title">{props.data.payload.title}</div>
        </div>
      </div>
    </div> 
  </div>
)

export default GitIssueActivity
