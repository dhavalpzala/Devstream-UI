import React from 'react'
import ActivityLogo from './activity_logo'
import ACTIVITY_TYPES from '../../constants/activity_types'
import moment from 'moment'

const SOAnswerActivity = (props) => {
  const { user, data } = props
  const commentNode = (
    <div className="comment-info">
      <div className="title">{data.title}</div>
      <div className="comment">{data.details}</div>
    </div>
  )

  return (
    <div className="activity so-comment">
      <ActivityLogo activityType= { ACTIVITY_TYPES.SO_ANSWER } />
      <div className="activity-content">
        <div className="cf activity-header">
          <span className="username">
            <img className="avatar" src={props.user.imageURL} />{props.user.firstName} {props.user.lastName}
          </span> commented on a <span className="question">question</span>
          <span className="time">{moment(props.time, 'X').fromNow()}</span>
        </div> 
        <div className="activity-description">
          {commentNode}
        </div>
      </div> 
    </div>
  )
}

export default SOAnswerActivity
