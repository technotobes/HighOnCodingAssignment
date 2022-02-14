import React, { Component } from 'react'
import Article from './components/Article';
import FeatArticle from './components/FeatArticle';
import Navbar from './components/Navbar';
import './App.css'

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <FeatArticle 
          title="Curse of the Current Reviews"
          body="When you want to buy any application from the
                Apple iTunes store you have more choices than you can handle
                . Most of the users scroll past the application description
                completely avoiding it like ads displayed on the right column
                of your webpage. There choice is depends on three important factors
                price, screenshot and reviews."
        />
        <Article 
          title="Hello WatchKit"
          body="Last month Apple released the anticipated WatchKit Framework for developers
          in the form of iOS 8.2 beta SDK release. The WatchKit framework enable the developers to create
          Apple Watch applications. In this article we are going to focus on the basics of getting started with
          the WatchKit framework and developing apps for the Apple Watch"
          commentnum="12"
          likesnum="124"
        />
          <Article 
          title="Introduction to Swift"
          body="Swift is a modern programming langauge developed by Apple to create the next generation
          of iOS and OSX applications. Swift is a fairly new language and still in developement but clearly
          reflects the intentions and the future direction. This article will revolve around the basic
          concepts in the Swift language and how you can get started."
          commentnum="15"
          likesnum="45"
        />
      </div>
    )
  }
}

export default App;
