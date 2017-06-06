import React, { Component } from 'react'
import './UserAvatar.css'

class UserAvatar extends Component {
  constructor () {
    super()
    this.state = {
      imageUrl: 'https://avatars2.githubusercontent.com/u/712023?v=3&s=460'
    }
  }

  render() {
    return (
      <img src={this.state.imageUrl} alt="" />
    )
  }
}

export default UserAvatar