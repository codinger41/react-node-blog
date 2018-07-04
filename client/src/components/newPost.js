import React from 'react'
import { Link } from 'react-router-dom'

export default class NewPost extends React.Component {
  render(){
    return(
      <div class="container my-5">
        <div class="row justify-content-center">
          <h1 class="text-center my-5 header-color">Add New Blog post</h1>
        </div>
        <hr class="hr-class"/>
        <div class="row justify-content-center">
          <div class="col-lg-10 col-md-10">
          <div class="card">
            <div class="upload-img">
              <div class="row justify-content-center">
                <div class="col-12">
                  <p class="text-center">
                    <span class="h2">
                      <i class="fa fa-camera" aria-hidden="true"></i>
                    </span>
                    <br/> Click to upload image
                  </p>
                </div>
              </div>
            </div>
            <hr/>
            <div class="card-body">
            <div class="form-group row">
              <div class="col-sm-4">
                <label>Title:</label>
                <input type="text" class="form-control" placeholder="lorem ipsum"/>
              </div>
            </div>
            <label>Story</label>
            <textarea placeholder="Lorem Ipsum Dolor" cols="3" rows="3" class="form-control"></textarea>
            <hr/>
            <div class="text-center">
              <button class="btn btn-primary">
                <i class="fa fa-plus-circle" aria-hidden="true"></i> Post
              </button>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
    )
  }
}