import React from 'react'
import ActivityLogo from './activity_logo'
import ACTIVITY_TYPES from '../../constants/activity_types'

const GitCommitActivity = (props) => {
  const commits = props.data.payload.commits || []
  const commitNodes = commits.map((commit, idx) => (
    <div className="commit-info" key={idx}>
      <div className="sha">{commit.sha.substr(0,8)}</div>
      <div className="author">{commit.author.name}</div>
      <div className="message">{commit.message}</div>
    </div>
  ))

  return (
    <div className="activity git-commit">
      <ActivityLogo activityType= { ACTIVITY_TYPES.GIT_COMMIT } />
      <div className="activity-content">
        <div className="activity-header">
          <span className="username">{props.user.firstName} {props.user.lastName}</span> pushed {props.data.payload.commits.length} commits to <span className="branch-name">{props.data.payload.ref}</span> at <span className="project">{props.data.repo.name}</span>
        </div> 
        <div className="activity-description">
          {commitNodes}
        </div>
      </div> 
    </div>
  )
}

export default GitCommitActivity
