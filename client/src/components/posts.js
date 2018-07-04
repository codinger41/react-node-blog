import React from 'react'
import { Link } from 'react-router-dom'
import { getAllPosts } from '../api/index'

export default class Posts extends React.Component {
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
          <h3> LATEST POSTS </h3>
          <hr class="hr-class"/>
        </section>
        <section class="container home_details">
          <div class="row card-deck">
            
            {
              this.state.posts ? this.state.posts.map(post => (
                <div class="col-md-4">
                <div class="card">
                <div class="view overlay hm-white-slight">
                  <img class="card-img-top img-zoom" src={require('../img/biz1.jpg')} class="img-fluid" alt=""/>
                </div>
                <div class="card-body">
                  <Link to={`/post/${post._id}`}>
                    <h4 class="card-title">{post.title}</h4>
                    <hr/>
                  </Link>
                </div>
                  <div class="seeButton">
                    <Link to={`/post/${post._id}`} class="btn btn-outline-primary"> See More</Link>
                  </div>
                </div>
                </div>
              )) : (
                <h2>Wheew, no blogpost</h2>
              )
            }
            
          </div>
        </section>
      </div>
    )
  }
}