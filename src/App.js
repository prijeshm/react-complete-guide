import React, { Component } from 'react';
import './App.css';
import Validation from './Validation';
import CharComponent from './CharComponent';

class App extends Component {
  state = {
    str: ''
  }

  render() { 
    const { str } = this.state;
    return (
      <div className="App">
        <div className="row">
          <input type="text" value={str} onChange={this.updateString} />
        </div>
        <div className="row">
          <Validation strLength={str.length} />
        </div>
        <div className="row">
          {
            str.split('').map((letter, index) => <CharComponent key={index} letter={letter} clicked={() => this.removeTextAt(index)}/>)
          }
        </div>
        
      </div>
    );
  }

  updateString = e => {
    const value = e.target.value;
    this.setState({
      str: value
    })
  }

  removeTextAt = index => {
    let str = this.state.str.split('');
    str = str.filter((s, i) => i !== index).join('')
    this.setState({
      str
    })
  }
}

export default App;
