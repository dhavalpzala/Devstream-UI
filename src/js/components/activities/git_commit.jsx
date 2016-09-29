import React from 'react'

export default class GitCommitActivity extends React.Component {
  constructor (props) {
    super(props)
  }
  render() {
    return (<div className="activity git-commit">
        <div className="activity-logo">
          <div className="activity-logo-image"></div>
          <div className="activity-logo-vline"></div>
          <div className="activity-logo-hline"></div>
        </div>
        <div className="activity-content">
          <div className="activity-header">{ this.props.data.header }</div> 
          <div className="activity-description">{ this.props.data.description }</div>
        </div> 
      </div>)
  }
}