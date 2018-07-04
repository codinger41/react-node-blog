import React from 'react'

export default class Header extends React.Component {
  render(){
    return (
      <div classNameName="App">
        <nav className="navbar navbar-expand-lg navbar-custom">
          <a className="navbar-brand" href="index.html">
            <img src={require('../img/logo.png')} className="navbar-logo-img mr-2" />
          </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
            aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">

            </ul>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a href="signin.html" className="nav-link btn-primary text-white">
                  <i className="fa fa-sign-in" aria-hidden="true"></i> Sign In
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    )
  }
}