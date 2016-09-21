import React from 'react';

export default class App extends React.Component {

  render() {
    return (
      <div>
        <div className="routerView">
          {this.props.children}
        </div>
      </div>
    );
  }
}