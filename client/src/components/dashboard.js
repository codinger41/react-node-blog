import React from 'react'
import { Link } from 'react-router-dom'
import { getAllPosts } from '../api/index'

export default class Dashboard extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      posts: null
    }
  }
  async componentWillMount(){
    const posts = await getAllPosts()
    this.setState({ posts: posts })
  }
  async componentDidUpdate(){
    const posts = await getAllPosts()
    this.setState({ posts: posts })
  }

  render(){
    return(
      <div>
        <section class="container text-center">
          <h3>My blog posts
          </h3>
          <hr class="hr-class" />
        </section>
        <section class="container home_details">
          <div class="row card-deck">

            {
              this.state.posts && this.state.posts.map(post => (
                <div class="col-md-4">
                  <div class="card">
                      <div class="view overlay hm-white-slight">
                          <img class="card-img-top img-zoom"  src={require('../img/biz1.jpg')} class="img-fluid" alt=""/>
                      </div>
                      <div class="card-body">
                          <a href="#">
                              <h4 class="card-title">{post.title}</h4>
                              <hr/>
                          </a>
                          <div class="seeButton">
                              <button class="btn btn-outline-primary">
                                  <i class="fa fa-pencil-square-o" aria-hidden="true"></i> Edit
                              </button>
                              <a data-toggle="modal" data-target="#exampleModal" class="btn btn-outline-danger">
                                  <i class="fa fa-trash-o" aria-hidden="true"></i> Delete</a>
                          </div>
                      </div>
                  </div>
              </div>
              ))
            }
              
          </div>
          <br/>
        </section>
      </div>
    )
  }
}