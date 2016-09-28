import React from 'react'

export default class GitCommitActivity extends React.Component {
  constructor (props) {
    super(props)
  }
  render() {
    return (<div>{ this.props.data.header } { this.props.data.description }</div>)
  }
}