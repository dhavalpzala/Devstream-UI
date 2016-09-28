import React from 'react'
import Github from './github'
import Cas from './cas'
import StackOverflow from './stackoverflow'
import appStoreInstance from '../stores/app.store'

export default class Home extends React.Component {

  constructor () {
    super()

    this.state = {
      activities: appStoreInstance.activities 
    }
  }

  componentDidMount () {
    appStoreInstance.addChangeListener(this._onChange)
  }

  render () {
    return <div><Github/><Cas/><StackOverflow/></div>
  }

  _onChange () {
    console.log(appStoreInstance.activities)
  }
}