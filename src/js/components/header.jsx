import React from 'react'
import Cas from './authentication/cas'
import { Link } from 'react-router'

export default class Header extends React.Component {
  render() {
    return (
      <header>
        <div className="header-title"><Link to="/">DevStream</Link></div>
        <div className="header-links">
          <Link to="profile">Profile</Link>
          <div className="header-link"><Cas/></div>
        </div>
      </header>
    );
  }
}