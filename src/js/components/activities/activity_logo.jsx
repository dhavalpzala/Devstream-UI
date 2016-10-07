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
            logoClassNames = 'fa fa-github'
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
