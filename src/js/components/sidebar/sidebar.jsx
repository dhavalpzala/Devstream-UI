import React from 'react'
import TrendingProjects from './trending_projects'
import TrendingUsers from './trending_users'
import TrendingTopics from './trending_topics'

const TrendingSidebar = (props) => {
  const components = []
  if (props.projects) components.push(<TrendingProjects limit="5" key="1" />)
  if (props.users) components.push(<TrendingUsers limit="5" key="2" />)
  if (props.topics) components.push(<TrendingTopics limit="5" key="3" />)

  return (
    <aside className="sidebar">
      {components}
    </aside>
  )
}

export default TrendingSidebar
