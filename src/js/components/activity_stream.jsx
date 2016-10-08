import React from 'react'
import appStoreInstance from '../stores/app.store'
import AppService from '../services/app.service'

export default class ActivityStream extends React.Component {
  constructor(props) {
    super(props)
    
    this.state = {
      activities: AppService.getActivities(),
      lastTimestamp: +(new Date())
    }
  }

  render() {
    const activities = []
    console.log(activities)
    if (this.state.activities) {
      this.state.activities.forEach((activity) => {
        console.log(activity)
        switch (activity.type) {
          case ACTIVITY_TYPES.GIT_COMMIT:
            activities.push(<GitCommitActivity key={ activity.id } data={ activity.data } />)
            break
        }
      })
    }

    return (
      <div className="activities">
        <div></div>
      </div>
    )
  }
}

ActivityStream.defaultProps = {
  limit: 30
}
