import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Posts from './components/posts'
import Signin from './components/signin'

export const Router = () => (
    <div>
      <Switch>
        <Route exact path="/" component={ Posts } />
        <Route path="/signin" exact component={ Signin } />
        <Route path="/business/view/:id" exact component={ Posts } />
        <Route path="/businesses/add" exact component= { Posts } />
        <Route path="/businesses/edit/:id" exact component={ Posts } />
        <Route path="/dashboard" exact component={ Posts } />
        <Route path="/signin" exact component={ Posts } />
      </Switch>
    </div>
);

export default Router