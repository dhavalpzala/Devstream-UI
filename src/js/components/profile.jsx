import React from 'react'
import Github from './authentication/github'
import StackOverflow from './authentication/stackoverflow'

export default class Profile extends React.Component {
  render() {
    return (
      <div><Github/><StackOverflow/></div>
    );
  }
}