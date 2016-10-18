import React from 'react'
import appStoreInstance from '../../stores/app.store'
import TRENDS_TYPE from '../../constants/trends_type'

export default class TrendingProjects extends React.Component {
  constructor(props) {
    super(props)

    let projects = appStoreInstance.trends[TRENDS_TYPE.PROJECTS]
    if (!projects) {
      projects = []
    }
    
    this.state = { projects }    
  }

  componentDidMount () {
    appStoreInstance.addChangeListener(() => {
      const projects = appStoreInstance.trends[TRENDS_TYPE.PROJECTS]
      if (projects) {
        this.setState({ projects })
      }
    })
  }

  render() {
    return (
      <div className='trending-projects'>
        <div className="title">Trending Projects</div>
        { this.state.projects.map((project, i) => (<div className='project' key={ project.id }>
          <a target="_blank" href={`https://github.com/${project.name}`}>{ project.name }</a>
        </div>)) }
      </div>
    )
  }
}

TrendingProjects.defaultProps = {
  limit: 5  
}
