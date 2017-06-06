import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Navbar from './Navbar'
import UserAvatar from './UserAvatar'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        <div className="container">
          <div className="row">
            <div className="col-4">
              <UserAvatar/>
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
