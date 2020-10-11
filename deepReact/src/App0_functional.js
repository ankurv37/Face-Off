import React, { useState } from 'react';
//import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';


const app = props => {
  const [personsState, setPersonsState ]= useState({
    persons: [
      {name: 'Max', age:28},
      {name: 'Manu', age:29},
      {name: 'Steph', age:26}
    ],
    otherState: 'Some other value'
  });

const [otherState, setOtherState] = useState('some other value');

console.log(personsState, otherState);

const switchNameHandler = () => {
  // console.log('was clicked');
  setPersonsState({persons: [
    {name: 'Max', age:28},
    {name: 'Manu', age:31},
    {name: 'Steph', age:27}
  ]
});
};

//  render() {
    return (
      <div className="App">
        <h1>Hi, I am react app</  h1>
        <h2>Hi, I am react app 2</h2>
        <Person name={personsState.persons[0].name} age={personsState.persons[0].age} > and this is my Project</Person>
        <Person name={personsState.persons[1].name} age={personsState.persons[1].age}/>
        <Person name={personsState.persons[2].name} age={personsState.persons[2].age}/>
        <button onClick={switchNameHandler}>Switch name</button>
      </div>
    );
  //return React.createElement('div',null,'hi','i am a react app !!');
  //}
}

export default app;
