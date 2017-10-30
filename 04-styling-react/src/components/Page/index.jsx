import React, { Component } from 'react'
import './style.css'
import Header from './Header'

class Page extends Component {
  render() {
    return (
      <div>
        <h1>Hello from the Page component</h1>
        <Header />
      </div>
    )
  }
}

export default Page;
