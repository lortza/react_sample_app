import React, { Component } from 'react';
import './App.css';
import ContactCards from './components/ContactCards'
import StopAndGo from './components/StopAndGo.js'
import SpiritForm from './components/SpiritForm.js'
import Task from './components/Task.js'


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

var xhr = new XMLHttpRequest()
let response = []
xhr.addEventListener( "load", function(){
  response = JSON.parse(xhr.responseText).data
  console.log(response)
  // document.getElementById( "json-placeholder" ).innerHTML = response
});

xhr.open("GET", "http://localhost:4517", true);
xhr.send();


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>My React App</h2>
        </div>
        <h1 className='project-divider'>Rails Tasks API Data</h1>
        <div id="json-placeholder">json placeholder
        {response.map(function(task){
          return <Task key={task.id} details={task} />
        })}
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
