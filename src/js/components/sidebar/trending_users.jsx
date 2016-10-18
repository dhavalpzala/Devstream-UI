import React from 'react'
import appStoreInstance from '../../stores/app.store'
import TRENDS_TYPE from '../../constants/trends_type'
import { Link } from 'react-router'

export default class TrendingUsers extends React.Component {
  constructor(props) {
    super(props)

    let users = appStoreInstance.trends[TRENDS_TYPE.USERS]
    if (!users) {
      users = []
    }
    
    this.state = { users }
  }

  componentDidMount () {
    appStoreInstance.addChangeListener(() => {
      const users = appStoreInstance.trends[TRENDS_TYPE.USERS]
      if (users) {
        this.setState({ users })
      }
    })
  }

  render() {
    return (
      <div className='trending-users'>
        <div className="title">Trending Users</div>
        {this.state.users.map((user, i) => (<div className='user' key={ user.employeeId }><Link to={ `user/${user.employeeId}` }>{ `${user.firstName} ${user.lastName}` }</Link></div>))}
      </div>
    )
  }
}

TrendingUsers.defaultProps = {
  limit: 5  
}
