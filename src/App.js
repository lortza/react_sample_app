import React, { Component } from 'react';
import './App.css';
import ContactCards from './components/ContactCards'
import StopAndGo from './components/StopAndGo.js'
import SpiritForm from './components/SpiritForm.js'


const people = [
  {
    name: 'Sven',
    phone: '504-555-1212',
    favorite: true
  },
  {
    name: 'Olga',
    phone: '713-555-1212',
    favorite: false
  },
  {
    name: 'Erik',
    phone: '985-555-1212',
    favorite: false
  }
]

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>My React App</h2>
        </div>
        <h1 className='project-divider'>Spirit Animal Form</h1>
        <SpiritForm />

        <h1 className='project-divider'>Stop & Go</h1>
        <StopAndGo />

        <h1 className='project-divider'>Contact Cards</h1>
        <ContactCards people={people} />
      </div>
    );
  }
}

export default App;
