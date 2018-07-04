import React from 'react'

export default class Footer extends React.Component {
  render(){
    return(
      <div class="footer">
        <div class="row">
          <div class="col-lg-2 col-md-6">
            <div class="footer-sec">
              <h6>Account</h6>
              <a href="signup.html">Sign Up</a>
            </div>
          </div>
          <div class="col-lg-3 col-md-6">
            <div class="footer-sec">
              <h6>Private</h6>
              <a href="registration.html">Register new</a>
              <a href="404.html">404 Error Page</a>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="footer-sec">
              <h6>News Letter</h6>
              <span>Get Notified on whats up...</span>
              <form action="#" method="post">
                <input type="email" required placeholder="Your Email Here" />
                <button type="submit" class="btn btn-primary">
                  <i class="fa fa-send-o"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
        <br/>
        <div class="row">
          <div class="col-lg-4 col-md-4"></div>
          <p class="copyright footer-logo">
            <i class="fa fa-copyright"></i> Developed with
            <i class="fa fa-heart text-info"></i>&nbsp; by
            <a href="https://github.com/leksyib">
              <strong>leksyib</strong>
            </a>
          </p>
          <div class="col-lg-3 col-md-3">
          </div>
          <div class="col-lg-3 col-md-3"></div>
          <div class="col-lg-3 col-md-3">
          </div>
        </div>
      </div>
    )
  }
}