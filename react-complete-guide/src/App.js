import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';
//import Image from './Image/Image';

class App extends Component {
  state={
    persons: [
      {name: 'Max', age:28},
      {name: 'Manu', age:29},
      {name: 'Steph', age:26}
    ]
  }

switchNameHandler = (newName) =>{
  // console.log('was clicked');
  this.setState({persons: [
    {name: newName, age:28},
    {name: 'Manu', age:31},
    {name: 'Steph', age:27}
  ]
})
}

  render() {
    return (
      <div className="App">
        <h1>Hi, I am react app</  h1>
        <h2>Hi, I am react app 2</h2>
        <button onClick={this.switchNameHandler.bind(this, 'Max!')}>Click </button>
        <Person
        name={this.state.persons[0].name}
        age={this.state.persons[0].age}
        click={this.switchNameHandler.bind(this, 'Ankur')} >and this is my Project</Person>
        <Person
        name={this.state.persons[1].name}
        age={this.state.persons[1].age}/>
        <Person
        name={this.state.persons[2].name}
        age={this.state.persons[2].age}/>

      </div>
    );
  //return React.createElement('div',null,'hi','i am a react app !!');
  }
}

export default App;
