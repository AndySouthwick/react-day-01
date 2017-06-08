import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Navbar from './Navbar'
import UserAvatar from './UserAvatar'
import PresidentList from './PresidentList'

class App extends Component {
  constructor () {
    super()

    this.state = {
      imageUrl: 'https://avatars2.githubusercontent.com/u/712023?v=3&s=460',
      presidents: [
        {
          name: 'George Washington',
          age: 2
        },
        {
          name: 'John Adams',
          age: 4
        },
        {
          name: 'Thomas Jefferson',
          age: 8
        }
      ]
    }
  }

  render() {
    return (
      <div className="App">
        <Navbar/>
        <div className="container">
          <div className="row">
            <div className="col-4">
              <UserAvatar imageUrl={this.state.imageUrl}/>
              <PresidentList listOfPresidents={this.state.presidents}/>
            </div>
            <div className="col-8">

            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
