import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';
import Image from './Image/Image';
import ScriptTag from 'react-script-tag';
import Radium from 'radium';

class App extends Component {
  state={
    persons: [
      {mbrId: 1001,name: 'Max', age:28},
      {mbrId: 1002,name: 'Manu', age:29,uvindex:7 , SunburnTime:20 ,o3Level:25 ,underEyeWrinkles:3,
         foreheadWrinkles:2 ,acne: 2, darkCircles: 4, skinage: 3 , elasticity: 3, firmness : 2,
      CautionaryStatement: 'Seek shade between 10AM and 4PM when the sun’s rays are its strongest. Wearing protective clothing, including a hat and sunglasses, is a great way to limit exposure. Sunscreen should be applied every two hours, even on cloudy days, and reapplied after swimming or sweating.'},
      {mbrId: 1003,name: 'Steph', age:26,uvindex:7 , SunburnTime:20 ,o3Level:25 ,underEyeWrinkles:3,
         foreheadWrinkles:2 ,acne: 2, darkCircles: 4, skinage: 3 , elasticity: 3, firmness : 2,
      CautionaryStatement: 'Seek shade between 10AM and 4PM when the sun’s rays are its strongest. Wearing protective clothing, including a hat and sunglasses, is a great way to limit exposure. Sunscreen should be applied every two hours, even on cloudy days, and reapplied after swimming or sweating.'}
    ],
    showPersons: false
  }

switchNameHandler = (newName) =>{
  // console.log('was clicked');
  this.setState({persons: [
    {name: newName, age:28,uvindex:7 , SunburnTime:20 ,o3Level:25 ,underEyeWrinkles:3,
       foreheadWrinkles:2 ,acne: 2, darkCircles: 4, skinage: 3 , elasticity: 3, firmness : 2,
    CautionaryStatement: 'Seek shade between 10AM and 4PM when the sun’s rays are its strongest. Wearing protective clothing, including a hat and sunglasses, is a great way to limit exposure. Sunscreen should be applied every two hours, even on cloudy days, and reapplied after swimming or sweating.'},
    {name: 'Manu', age:31,uvindex:7 , SunburnTime:20 ,o3Level:25 ,underEyeWrinkles:3,
       foreheadWrinkles:2 ,acne: 2, darkCircles: 4, skinage: 3 , elasticity: 3, firmness : 2,
    CautionaryStatement: 'Seek shade between 10AM and 4PM when the sun’s rays are its strongest. Wearing protective clothing, including a hat and sunglasses, is a great way to limit exposure. Sunscreen should be applied every two hours, even on cloudy days, and reapplied after swimming or sweating.'},
    {name: 'Steph', age:27,uvindex:7 , SunburnTime:20 ,o3Level:25 ,underEyeWrinkles:3,
       foreheadWrinkles:2 ,acne: 2, darkCircles: 4, skinage: 3 , elasticity: 3, firmness : 2,
    CautionaryStatement: 'Seek shade between 10AM and 4PM when the sun’s rays are its strongest. Wearing protective clothing, including a hat and sunglasses, is a great way to limit exposure. Sunscreen should be applied every two hours, even on cloudy days, and reapplied after swimming or sweating.'}
  ]
})
}

nameChangedHandler = (event, id) => {
  const personIndex = this.state.persons.findIndex(p => {
    return p.mbrId === id;
  });

  const person = {
    ...this.state.persons[personIndex]
  };

  person.name = event.target.value;
  console.log("person name " + person.name)
  const persons = [...this.state.persons];
  persons[personIndex] = person;

  this.setState({ persons: persons})
}

togglePersonHandler = () => {
  const doesShow = this.state.showPersons;
  this.setState({showPersons: !doesShow});
}

deletePersonHandler = (personIndex) => {
  //const persons = this.state.persons.slice();
  const persons = [...this.state.persons];
  persons.splice(personIndex,1);
  this.setState({persons:persons})
}

  render() {
    const style = {
      backgroundColor: 'green',
      font: 'inherit',
      color: 'white',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover':{
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    };

    let persons = null;

    if (this.state.showPersons){
      persons = (
        <div>
        {
          this.state.persons.map((person, index) =>{
            return <Person
            click={() => this.deletePersonHandler(index)}
            key={person.mbrId}
            changed={(event) => this.nameChangedHandler(event, person.mbrId)}
            name={person.name}
            age={person.age}
            uvindex={person.uvindex}
            SunburnTime={person.SunburnTime}
            o3Level={person.o3Level}
            underEyeWrinkles={person.underEyeWrinkles}
            foreheadWrinkles={person.foreheadWrinkles}
            acne={person.acne}
            darkCircles={person.darkCircles}
            skinage={person.skinage}
            elasticity={person.elasticity}
            firmness={person.firmness}
            CautionaryStatement={person.CautionaryStatement} />
          })
        }
        </div>
      );
      style.backgroundColor = 'red';
      style[':hover'] ={
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    }

    let classes = [];
    if(this.state.persons.length<=2){
      classes.push('red');
    }
    if(this.state.persons.length<=1){
      classes.push('bold');
    }

    return (
      <div className="App">
        <h1>Hi, I am Face AI</  h1>
        <p className={classes.join(' ')}> Development in Progress...</p>
        <Image />
        <button
        style={style}
        onClick={this.togglePersonHandler}>Toggle Profiles </button>
        <button
        style={style}
        onClick={this.switchNameHandler.bind(this, 'Ankur')}>Get Results </button>
        {persons}

      </div>

    );
  //return React.createElement('div',null,'hi','i am a react app !!');
  }
}

export default Radium(App);
