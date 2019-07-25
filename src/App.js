import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const App = () => {
  const [personsState, setPersonsState] = useState({
    persons: [
      { name: 'Prijesh', age: 32 },
      { name: 'Jijina', age: 31 },
      { name: 'Aadhith', age: 5 },
    ]
  });

  const [otherState, setOtherState] = useState('Some other state');

  const switchNameHandler = event => {
    console.log("Clicked!!!");

    setPersonsState({
      persons: [
        { name: 'Prijesh Meppayil', age: 32 },
        { name: 'Jijina', age: 31 },
        { name: 'Aadhith', age: 5 },
      ]
    })
  }

  console.log('personsState', personsState, 'otherState', otherState);
  

  return (
    <div className="App">
      <h1>Hi, I'm a React App</h1>
      <p>It's working fine</p>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
      <Person name={personsState.persons[1].name} age={personsState.persons[1].age} />
      <Person name={personsState.persons[2].name} age={personsState.persons[2].age} />
      {/* <Person name="Jijina" age="31" />
      <Person name="Aadhith" age="5">
        My Hobby: Coloring
      </Person> */}
    </div>
  );



}

export default App;
