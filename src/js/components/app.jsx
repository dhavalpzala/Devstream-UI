import React from 'react'
import Header from './header'
import Footer from './footer'
import AppAction from '../actions/app.action'

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

// to get activities
AppAction.getActivities()