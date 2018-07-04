import React from 'react'
import { Link, Redirect } from 'react-router-dom'
import { signIn } from '../api/index'

export default class Signin extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      email: null,
      password: null,
      redirect: false
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  changeUsername(event){
    this.setState({ email : event.target.value})
  }
  changePassword(event){
    this.setState({ password : event.target.value})
  }
  async handleSubmit(e){
    e.preventDefault()
    const res = await signIn(this.state)
    if(res){
      this.setState({ redirect: true })
    }
  }

  render(){
    if(!this.state.redirect){
      return(
        <div class="container my-5">
          <div class="row justify-content-center">
            <div class="col-md-4 col-lg-4 col-xs-4">
              <div class="card bg-primary text-center card-form">
                <div class="card-body">
                  <h3 class="text-white">Sign In</h3>
                  <h6 class="font-weight-light text-white">Enter your login details</h6>
                  <form>
                    <div class="form-group">
                      <input 
                        type="text" 
                        class="form-control form-control-sm" 
                        placeholder="Username"
                        onChange={this.changeUsername.bind(this)}
                        required
                      />
                    </div>
                    <div class="form-group">
                      <input 
                        type="password"
                        class="form-control form-control-sm" 
                        placeholder="Password"
                        onChange={this.changePassword.bind(this)}
                        required
                      />
                    </div>
                    <button
                      class="btn btn-warning btn-block"
                      onSubmit={this.handleSubmit}
                      onClick={this.handleSubmit}
                    >
                      <i class="fa fa-sign-in" aria-hidden="true"></i> Sign In
                    </button>
                  </form>
                  <hr/>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }else{
      return <Redirect to='/dashboard' />
    }
  }
}