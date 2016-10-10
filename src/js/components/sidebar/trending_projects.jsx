import React from 'react'

export default class TrendingProjects extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      projects: ["imaginea/kodeBeagle", "hashd/Papyrus", "imaginea/mViewer"]
    }
  }

  render() {
    return (
      <div className='trending-projects'>
        <div className="title">Trending Projects</div>
        {this.state.projects.map(project => (<div className='project'>{project}</div>))}
      </div>
    )
  }
}

TrendingProjects.defaultProps = {
  limit: 5  
}
