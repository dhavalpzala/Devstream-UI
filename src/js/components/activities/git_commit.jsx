import React from 'react'
import ActivityLogo from './activity_logo'
import ACTIVITY_TYPES from '../../constants/activity_types'

export default class GitCommitActivity extends React.Component {
  constructor (props) {
    super(props)
  }
  render() {
    return (<div className="activity git-commit">
        <ActivityLogo activityType= { ACTIVITY_TYPES.GIT_COMMIT } />
        <div className="activity-content">
          <div className="activity-header">{ this.props.data.header }</div> 
          <div className="activity-description">{ this.props.data.description }</div>
        </div> 
      </div>)
  }
}
