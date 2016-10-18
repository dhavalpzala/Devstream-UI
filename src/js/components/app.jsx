import React from 'react'
import Header from './header'
import Footer from './footer'
import AppAction from '../actions/app.action'
import TRENDS_TYPE from '../constants/trends_type'

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div className="routerView">
          {this.props.children}
        </div>
        <Footer />
      </div>
    );
  }
}

// get activities
AppAction.getActivities() 

// get trending projects, users and topics
AppAction.getTrends(TRENDS_TYPE.PROJECTS)
AppAction.getTrends(TRENDS_TYPE.USERS)
//AppAction.getTrends(TRENDS_TYPE.TOPICS)
