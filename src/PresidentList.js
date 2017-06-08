import React, { Component } from 'react'
import PropTypes from 'prop-types'

import PresidentItem from './PresidentItem'

class PresidentList extends Component {
  render () {
    return (
      <ul>
        {this.props.listOfPresidents.map((president) => {
          return <PresidentItem key={president.name} president={president}/>
        })}
      </ul>
    )
  }
}

PresidentList.propTypes = {
  listOfPresidents: PropTypes.array.isRequired
}

export default PresidentList