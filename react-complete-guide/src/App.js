import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';
import Image from './Image/Image';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I am react app</h1>
        <h2>Hi, I am react app 2</h2>
        <Person />
        <Image/ >
      </div>
    );
  //return React.createElement('div',null,'hi','i am a react app !!');
  }
}

export default App;
