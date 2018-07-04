import React from 'react'
import { Link } from 'react-router-dom'


export default class Header extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      token: null
    }
    this.handleSignOut = this.handleSignOut.bind(this)
  }

  async componentWillMount(){
    const token = await window.localStorage.getItem('token')
    this.setState({ token })
  }
  
  async handleSignOut(e){
    e.preventDefault()
    await window.localStorage.clear()
  }

  render(){
    return (
      <div classNameName="App">
        <nav className="navbar navbar-expand-lg navbar-custom">
          <Link to='/' className="navbar-brand">
            <img src={require('../img/logo.png')} className="navbar-logo-img mr-2" />
          </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
              aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
            </ul>
            <ul className="navbar-nav ml-auto">
              {
                this.state.token ? (
                  <div>
                    <li className="nav-item">
                        <Link to='/dashboard' className="nav-link btn-primary text-white">
                          <i className="fa fa-sign-in" aria-hidden="true"></i> Dashboard
                        </Link>
                    </li>
                    <li className="nav-item">
                      <button  to='/' className="nav-link btn-primary text-white">
                        <i className="fa fa-sign-in" aria-hidden="true"></i> Sign Out
                      </button>
                    </li>
                    </div>
                ) : (
                  <li className="nav-item">
                    <Link to='/signin' className="nav-link btn-primary text-white">
                      <i className="fa fa-sign-in" aria-hidden="true"></i> Sign In
                    </Link>
                  </li>
                )
              }
            </ul>
          </div>
        </nav>
      </div>
    )
  }
}