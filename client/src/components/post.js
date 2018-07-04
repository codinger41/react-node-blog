import React from 'react'


export default class Post extends React.Component {
  render(){
    return(
      <div class="col-8">
        <div class="card">
            <img class="card-img-top"  src={require('../img/biz1.jpg')} />
            <div class="card-body">
                <h1 class="card-title text-center h4 mb-4">Andela Nigeria
                <hr/>
                    <small class="text-muted">
                        <i class="ion ion-clock"></i>
                        2 days ago
                    </small>
                </h1>
                <p class="text-center my-4">
                    At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti
                    quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt
                    in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga
                </p>
            </div>
          </div>
        </div>
    )
  }
}