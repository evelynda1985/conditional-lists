import React, { Component } from 'react';
import './App.css';
import Person from "./component/person/Person";

class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Stephanie', age: 26 }
    ],
      otherState: 'some other value',
      showPersons: false
  };

  switchNameHandler = () => {
    // console.log('Was clicked!');
    // DON'T DO THIS: this.state.persons[0].name = 'Maximilian';
    this.setState({
      persons: [
        { name: 'Maximilian', age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Stephanie', age: 27 }
      ]
    });
  };

  togglePersonsHandler = () => {
      const doesShow = this.state.showPersons;
      this.setState({showPersons: !doesShow});
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button onClick={this.togglePersonsHandler}>Toggle Persons</button>
          {this.state.showPersons ?
              <div>
              <Person
                  name={this.state.persons[0].name}
                  age={this.state.persons[0].age}
              />
              <Person
                  name={this.state.persons[1].name}
                  age={this.state.persons[1].age}
              >
                  My Hobbies: Racing
              </Person>
              <Person
                  name={this.state.persons[2].name}
                  age={this.state.persons[2].age}
              />
          </div> : null
          }
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
