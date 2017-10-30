import React, { Component } from 'react'
import './style.css'
import Header from './Header'
import Menu from './Menu'
import Gallery from './Gallery'
import MenuEdit from './MenuEdit'

class Page extends Component {
  constructor(props) {
    super(props)
    this.state = {
      signedIn: false,
      editMenu: false,
    }
  }
  handleSignInClick = () => {
    console.log('handleSignInClick')
    this.setState({ signedIn: !this.state.signedIn })
  }
  handleEditMenuClick = () => {
    console.log('handleEditMenuClick')
    this.setState({ editMenu: !this.state.editMenu })
  }
  render() {
    return (
      <div>
        {!this.state.editMenu
          ? <div className='menu-edit'>
            <Header
              handleEditMenuClick={this.handleEditMenuClick}
              handleSignInClick={this.handleSignInClick}
              signedIn={this.state.signedIn}
            />
            <Gallery />
            <Menu />
          </div>
          : <div>
            <MenuEdit
              handleEditMenuClick={this.handleEditMenuClick}
            />
          </div>
        }

      </div>
    )
  }
}

export default Page;
