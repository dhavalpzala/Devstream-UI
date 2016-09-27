import React from 'react';
import Header from './header';
import Footer from './footer';

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