import React from 'react'
import Header from './components/header'
import Footer from './components/footer'
import Posts from './components/posts'

export default class App extends React.Component {
  render(){
    return(
      <div>
        <Header/>
          <div>
            <Posts />
          </div>
        <Footer />
      </div>
    )
  }
}