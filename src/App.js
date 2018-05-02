import React, { Component } from 'react';
import './App.css';
import ContactCards from './components/contact_cards/ContactCards'
import people_local_data from './data/person_data'
import StopAndGo from './components/walk_sign/StopAndGo.js'
import SpiritForm from './components/spirit_animal/SpiritForm.js'
import TaskList from './components/tasks/TaskList.js'
import UserList from './components/api_user_list/UserList'


class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>My React App</h2>
        </div>
        <h1 className='project-divider'>Rails Tasks API Data</h1>
        <div id="json-placeholder">
          <TaskList />
        </div>

        <h1 className='project-divider'>Spirit Animal Form</h1>
        <SpiritForm />

        <h1 className='project-divider'>Stop & Go</h1>
        <StopAndGo />

        <h1 className='project-divider'>reqres.in API Contact Cards</h1>
        <UserList />

        <h1 className='project-divider'>Local Data Contact Cards</h1>
        <ContactCards people={people_local_data} />
      </div>
    );
  }
}

export default App;
