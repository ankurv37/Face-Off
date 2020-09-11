import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';
import Image from './Image/Image';
import ScriptTag from 'react-script-tag';


class App extends Component {
  state={
    persons: [
      {name: 'Max', age:28},
      {name: 'Manu', age:29},
      {name: 'Steph', age:26}
    ],
    showPersons: false
  }

switchNameHandler = (newName) =>{
  // console.log('was clicked');
  this.setState({persons: [
    {name: newName, age:28,uvindex:7 , SunburnTime:20 ,o3Level:25 ,underEyeWrinkles:3,
       foreheadWrinkles:2 ,acne: 2, darkCircles: 4, skinage: 3 , elasticity: 3, firmness : 2,
    CautionaryStatement: 'Seek shade between 10AM and 4PM when the sun’s rays are its strongest. Wearing protective clothing, including a hat and sunglasses, is a great way to limit exposure. Sunscreen should be applied every two hours, even on cloudy days, and reapplied after swimming or sweating.'},
    {name: 'Manu', age:31},
    {name: 'Steph', age:27}
  ]
})
}

nameChangedHandler = (event) =>{
  this.setState({
    persons: [
      {name: 'Max', age: 28},
      {name: event.target.value, age: 29},
      {name: 'Stephanie', age: 27}
    ]
  })
}

togglePersonHandler = () => {
  const doesShow = this.state.showPersons;
  this.setState({showPersons: !doesShow});
}


  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if (this.state.showPersons){
      persons = (
        <div>
        <Person
        name={this.state.persons[0].name}
        age={this.state.persons[0].age}
        uvindex={this.state.persons[0].uvindex}
        SunburnTime={this.state.persons[0].SunburnTime}
        o3Level={this.state.persons[0].o3Level}
        underEyeWrinkles={this.state.persons[0].underEyeWrinkles}
        foreheadWrinkles={this.state.persons[0].foreheadWrinkles}
        acne={this.state.persons[0].acne}
        darkCircles={this.state.persons[0].darkCircles}
        skinage={this.state.persons[0].skinage}
        elasticity={this.state.persons[0].elasticity}
        firmness={this.state.persons[0].firmness}
        CautionaryStatement={this.state.persons[0].CautionaryStatement}
        click={this.switchNameHandler.bind(this, 'Ankur')} >
        </Person>

        <Person
        name={this.state.persons[1].name}
        age={this.state.persons[1].age}
        click={this.switchNameHandler.bind(this, 'Max !')}
        changed={this.nameChangedHandler} > My Hobbies : Racing
        </Person>

        <Person
        name={this.state.persons[2].name}
        age={this.state.persons[2].age} />
        </div>
      );
    }
    return (
      <div className="App">
        <h1>Hi, I am Sydney Face AI</  h1>
      <Image />
        <button
        style={style}
        onClick={this.togglePersonHandler}>Get Results </button>
        {persons}

      </div>

    );
  //return React.createElement('div',null,'hi','i am a react app !!');
  }
}

export default App;
