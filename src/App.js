import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id: 1, name: 'Prijesh', age: 32 },
      { id: 2, name: 'Jijina', age: 31 },
      { id: 3, name: 'Aadhith', age: 5 },
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
          {
            this.state.persons.map((person, index) => {
              return <Person 
                key={person.id}
                name={person.name} 
                age={person.age} 
                changed={(e) => this.switchNameHandler(e, person.id)}
                click={() => this.deletePersonHandler(index)}/>;
            })
          }
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

  switchNameHandler = (e, id) => {
    const personIndex = this.state.persons.findIndex(p => p.id === id);
    const person = {...this.state.persons[personIndex]};

    person.name = e.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons });
  }

  deletePersonHandler = (personIndex) => {
    // copying the data
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons];

    persons.splice(personIndex, 1);
    this.setState({persons});
  }

  togglePersonsHandler = event => {
    event.preventDefault();
    this.setState({showPersons: !this.state.showPersons});
  }
}

export default App;
