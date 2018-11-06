import React, { Component } from 'react';
import './App.css';

// import FormEmployee from './FormEmployee';
import WhatIsYourFavoriteMovie from './Movies';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <WhatIsYourFavoriteMovie />
        </div>
      </div>
    );
  }
}

export default App;
