import React from 'react'
import Github from './github'
import Cas from './cas'
import StackOverflow from './stackoverflow'

export default class Home extends React.Component {
  render() {
    return <div><Github/><Cas/><StackOverflow/></div>
  }
}