import React from 'react'
import Github from './github'
import Cas from './cas'


export default class Home extends React.Component {
  render() {
    return <div><Github/><Cas/></div>
  }
}