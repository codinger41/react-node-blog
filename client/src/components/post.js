import React from 'react'
import { getOnePost } from '../api/index'

export default class Post extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      post: null
    }
  }
  async componentWillMount(){
    const post = await getOnePost(this.props.match.params.postId)
    this.setState({ post })
  }
  render(){
    return(
      <div class="col-8">
      {
        this.state.post && (
          <div class="card">
            <img class="card-img-top"  src={require('../img/biz1.jpg')} />
            <div class="card-body">
                <h1 class="card-title text-center h4 mb-4">{ this.state.post.title }
                <hr/>
                    <small class="text-muted">
                        <i class="ion ion-clock"></i>
                        2 days ago
                    </small>
                </h1>
                <p class="text-center my-4">
                    {this.state.post.text}
                </p>
            </div>
          </div>
        )
      }
        </div>
    )
  }
}