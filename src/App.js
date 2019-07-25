import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Prijesh', age: 32 },
      { name: 'Jijina', age: 31 },
      { name: 'Aadhith', age: 5 },
    ]
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>It's working fine</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} />
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
        {/* <Person name="Jijina" age="31" />
        <Person name="Aadhith" age="5">
          My Hobby: Coloring
        </Person> */}
      </div>
    );
  }

  switchNameHandler = event => {
    console.log("Clicked!!!");
    // DON'T DO THIS: this.state.persons[0].name = 'Prijesh Meppayil';
    this.setState({
      persons: [
        { name: 'Prijesh Meppayil', age: 32 },
        { name: 'Jijina', age: 31 },
        { name: 'Aadhith', age: 5 },
      ]
    })

  }
}

export default App;
