import React from 'react'
import Cas from './authentication/cas'
import Logo from './logo'
import { Link } from 'react-router'
import appStoreInstance from '../stores/app.store'

export default class Header extends React.Component {
  constructor () {
    super()

    this.state = {
      isLoggedIn: appStoreInstance.isLoggedIn,
      firstName: undefined,
      lastName: undefined,
      showMenu: false
    }
  }

  componentDidMount () {
    appStoreInstance.addChangeListener(() => {
      this.setState({
        isLoggedIn: appStoreInstance.isLoggedIn,
        firstName: 'Saina',
        lastName: 'Nehwal',
        showMenu: false
      })
    })
  }

  toggleMenu() {
    let showMenu = !this.state.showMenu
    this.setState({ showMenu })
  }

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
            {(() => {
              if (this.state.isLoggedIn) {
                return (<div className="header-user" onClick= { this.toggleMenu.bind(this) }>
                  <div className="header-user-img"><i className="fa fa-user" aria-hidden="true"></i></div>
                  <div className="header-user-name"> { this.state.firstName + ' ' + this.state.lastName } </div> 
                  <div className={ this.state.showMenu ? 'header-user-links' : 'hidden'}>
                    <div className="header-user-link"><Link to="profile">Profile</Link></div>
                    <div className="header-user-link">Logout</div>
                  </div>
                </div>)
              } else {
                return <div className="header-link header-login-link"><Cas/></div>
              }
            })()}
          </div>
        </div>
      </header>
    )
  }
}
