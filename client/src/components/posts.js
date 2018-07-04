import React from 'react'

export default class Posts extends React.Component {
  render(){
    return(
      <div>
        <section class="container text-center">
          <h3> LATEST POSTS </h3>
          <hr class="hr-class"/>
        </section>
        <section class="container home_details">
          <div class="row card-deck">
            <div class="col-md-4">
              <div class="card">
                <div class="view overlay hm-white-slight">
                  <img class="card-img-top img-zoom" src={require('../img/biz1.jpg')} class="img-fluid" alt=""/>
                </div>
                <div class="card-body">
                  <a href="#">
                    <h4 class="card-title">Ventures Park</h4>
                    <hr/>
                  </a>
                  <p class="author">
                    <i class="fa fa-map-marker" aria-hidden="true"></i>
                    <span>Abuja, Nigeria</span>
                  </p>
                  <p class="author">
                    <i class="fa fa-pencil-square-o text-rose"></i>
                    <span>50 Reviews</span>
                  </p>
                </div>
                  <div class="seeButton">
                    <a href="feeds.html" class="btn btn-outline-primary"> See More</a>
                  </div>
                </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}