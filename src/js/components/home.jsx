import React from 'react'
import ActivityStream from './activity_stream'
import TrendingSidebar from './sidebar/sidebar'

export default class Home extends React.Component {
  render () {
    return (
      <div>
        <ActivityStream />
        <TrendingSidebar projects={true} users={true} topics={true} />
      </div>
    )
  } 
}
