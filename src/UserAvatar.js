import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './UserAvatar.css'

class UserAvatar extends Component {
  constructor () {
    super()
    // state = {}
    // props = {}
  }

  render() {
    return (
      <img src={this.props.imageUrl} alt="" />
    )
  }
}

UserAvatar.propTypes = {
  imageUrl: PropTypes.string.isRequired
}

export default UserAvatar