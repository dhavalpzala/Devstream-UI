import React from 'react'

export default class TrendingUsers extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      users: ["Keerath Jaggi", "Dhavalsinh Zala", "Sandeep Tiwari", "Bipul Kumar", "Kiran Danduprolu"]
    }
  }

  render() {
    return (
      <div className='trending-users'>
        <div className="title">Trending Users</div>
        {this.state.users.map(user => (<div className='user'>{user}</div>))}
      </div>
    )
  }
}

TrendingUsers.defaultProps = {
  limit: 5  
}
