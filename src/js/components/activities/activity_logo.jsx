import React from 'react'
import ACTIVITY_TYPES from '../../constants/activity_types'

export default class ActivityLogo extends React.Component {
  constructor (props) {
    super(props)
  }

  render() {
    let logoClassNames = ''
    switch (this.props.activityType) {
        case ACTIVITY_TYPES.GIT_COMMIT:
        case ACTIVITY_TYPES.GIT_ISSUE:
        case ACTIVITY_TYPES.GIT_PULL_REQUEST:
            logoClassNames = 'fa fa-github'
            break;

        case ACTIVITY_TYPES.SO_QUESTION:
        case ACTIVITY_TYPES.SO_ANSWER:
        case ACTIVITY_TYPES.SO_COMMENT:
          logoClassNames = 'fa fa-stack-overflow'
          break;
    
        default:
            break;
    }

    return (<div className="activity-logo">
        <div className="activity-logo-image"><i className={ logoClassNames } aria-hidden="true"></i></div>
        <div className="activity-logo-vline"></div>
        <div className="activity-logo-hline"></div>
    </div>)
  }
}
