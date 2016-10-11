import React from 'react'

export default class TrendingTopics extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      topics: ["Scala", "Spark", "Angular", "TypeScript", "ElasticSearch"]
    }
  }

  render() {
    return (
      <div className='trending-topics'>
        <div className="title">Trending Topics</div>
        {this.state.topics.map((topic, i) => (<div className='topic' key={i}>{topic}</div>))}
      </div>
    )
  }
}

TrendingTopics.defaultProps = {
  limit: 5  
}
