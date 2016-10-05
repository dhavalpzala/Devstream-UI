import React from 'react'
import Cas from './authentication/cas'
import Logo from './logo'
import { Link } from 'react-router'

export default class Header extends React.Component {
  render() {
    return (
      <header>
        <div>
          <div className="header-title">
            <Link to="/">
              <Logo />
              <span>DevStream</span>
            </Link>
          </div>
          <div className="header-links cf">
            <Link to="profile">Profile</Link>
            <div className="header-link"><Cas/></div>
          </div>
        </div>
      </header>
    )
  }
}
