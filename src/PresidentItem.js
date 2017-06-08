import React, { Component } from 'react'
import PropTypes from 'prop-types'

class PresidentItem extends Component {
  render () {
    return (
      <li>
        {this.props.president.name}<br />
        {this.props.president.age}
      </li>
    )
  }
}

PresidentItem.propTypes = {
  president: PropTypes.object.isRequired
}

export default PresidentItem