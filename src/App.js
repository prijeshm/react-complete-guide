import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Prijesh', age: 32 },
      { name: 'Jijina', age: 31 },
      { name: 'Aadhith', age: 5 },
    ],
    showPersons: false
  }

  render() {
    const style = {
      backgroundColor: '#fff',
      border: '1px solid blue',
      padding: '10px',
      font: 'inherit',
      cursor: 'pointer'
    }

    let persons = null;
    if(this.state.showPersons) {
      persons = (
        <div>
          <Person
            click={this.switchNameHandler.bind(this, 'Priju')}
            name={this.state.persons[0].name} 
            age={this.state.persons[0].age} />
          <Person 
            changed={this.nameChangeHandler}
            name={this.state.persons[1].name} 
            age={this.state.persons[1].age} />
          <Person 
            click={() => this.switchNameHandler('Aadhith M')}
            name={this.state.persons[2].name} 
            age={this.state.persons[2].age} />
        </div>
      );
    }
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>It's working fine</p>
        <button 
          style={style}
          onClick={this.togglePersonsHandler}>Toggle Persons</button>

        { persons }
        
      </div>
    );
  }

  switchNameHandler = newName => {
    console.log("Clicked!!!");
    newName = newName ? newName : '';
    // DON'T DO THIS: this.state.persons[0].name = 'Prijesh Meppayil';
    this.setState({
      persons: [
        { name: newName, age: 32 },
        { name: 'Jijina', age: 31 },
        { name: 'Aadhith', age: 5 },
      ]
    })
  }

  nameChangeHandler = event => {
    this.setState({
      persons: [
        { name: 'Prijesh', age: 32 },
        { name: event.target.value, age: 31 },
        { name: 'Aadhith', age: 5 },
      ]
    })
  }

  togglePersonsHandler = event => {
    event.preventDefault();
    this.setState({showPersons: !this.state.showPersons});
  }
}

export default App;
