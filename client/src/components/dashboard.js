import React from 'react'
import { Link } from 'react-router-dom'

export default class Dashboard extends React.Component {
  render(){
    return(
      <div>
        <section class="container text-center">
          <h3>My Businesses</h3>
          <hr class="hr-class" />
        </section>
        <section class="container home_details">
          <div class="row card-deck">
              <div class="col-md-4">
                  <div class="card">
                      <div class="view overlay hm-white-slight">
                          <img class="card-img-top img-zoom"  src={require('../img/biz1.jpg')} class="img-fluid" alt=""/>
                      </div>
                      <div class="card-body">
                          <a href="#">
                              <h4 class="card-title">Ventures Park</h4>
                              <hr/>
                          </a>
                          <p class="author">
                              <i class="fa fa-eye" aria-hidden="true"></i>
                              <span>20</span>
                          </p>
                          <p class="author">
                              <i class="fa fa-pencil-square-o text-rose"></i>
                              <span>50 Reviews</span>
                          </p>
                          <div class="seeButton">
                              <a href="update.html" class="btn btn-outline-primary">
                                  <i class="fa fa-pencil-square-o" aria-hidden="true"></i> Edit</a>
                              <a data-toggle="modal" data-target="#exampleModal" class="btn btn-outline-danger">
                                  <i class="fa fa-trash-o" aria-hidden="true"></i> Delete</a>
                          </div>
                      </div>

                  </div>

              </div>

              <div class="col-md-4">
                  <div class="card">
                      <div class="view overlay hm-white-slight">
                          <img class="card-img-top"  src={require('../img/biz1.jpg')} class="img-fluid" alt="" />
                      </div>
                      <div class="card-body">
                          <a href="#">
                              <h4 class="card-title">Hotels.ng</h4>
                              <hr/>
                          </a>
                          <p class="author">
                              <i class="fa fa-eye" aria-hidden="true"></i>
                              <span>25</span>
                          </p>
                          <p class="author">
                              <i class="fa fa-pencil-square-o text-rose"></i>
                              <span>20 Reviews</span>
                          </p>
                          <div class="seeButton">
                              <a href="update.html" class="btn btn-outline-primary">
                                  <i class="fa fa-pencil-square-o" aria-hidden="true"></i> Edit</a>
                              <a data-toggle="modal" data-target="#exampleModal" class="btn btn-outline-danger">
                                  <i class="fa fa-trash-o" aria-hidden="true"></i> Delete</a>
                          </div>
                      </div>

                  </div>

              </div>

              <div class="col-md-4">
                  <div class="card">
                      <div class="view overlay hm-white-slight">
                          <img class="card-img-top"  src={require('../img/biz1.jpg')} class="img-fluid" alt=""/>
                      </div>
                      <div class="card-body">
                          <a href="#">
                              <h4 class="card-title">EPIC Tour</h4>
                              <hr/>
                          </a>

                          <p class="author">
                              <i class="fa fa-eye" aria-hidden="true"></i>
                              <span>340</span>
                          </p>
                          <p class="author">
                              <i class="fa fa-pencil-square-o text-rose"></i>
                              <span>50000 Reviews</span>
                          </p>
                          <div class="seeButton">
                              <a href="update.html" class="btn btn-outline-primary">
                                  <i class="fa fa-pencil-square-o" aria-hidden="true"></i> Edit</a>
                              <a data-toggle="modal" data-target="#exampleModal" class="btn btn-outline-danger">
                                  <i class="fa fa-trash-o" aria-hidden="true"></i> Delete</a>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <br/>
        </section>
      </div>
    )
  }
}