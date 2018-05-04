import React from "react"
import Task from './Task'
import TaskForm from './TaskForm'
import serialize from 'form-serialize' // npm install form-serialize --save
// import Fetch from 'fetch-rails'



class TaskList extends React.Component {
  constructor(){
    // Always call super first
    super()
    this.state = {
      tasks: [],
      apiBase: 'http://localhost:4517',
      loading: '/images/loading1.gif',
      isFetching: false
    }
    this.deleteTask = this.deleteTask.bind(this)
    this.getAllTasks = this.getAllTasks.bind(this)
  }

  componentDidMount() {
    this.getAllTasks()
  }

  getAllTasks() {
    // Before performing the fetch, set isFetching to true
    this.setState({isFetching: true})
    // After component mounts, call the API to get the
    // users, then update state which triggers re-render
    fetch(`${this.state.apiBase}/tasks`, {
      headers: {Accept: 'application/json'},
      credentials: 'same-origin'
    })
      .then(function(response) {
        return response.json()
      })
      .then((json) => {
        this.setState({
          tasks: json.data,
          isFetching: false
        })
      })
  }

  addNewTask = (e) => {
    e.preventDefault()
    const form = e.target
    const body = serialize(form, {hash: true})

    const options = {
      headers: {
        'Content-Type': 'application/json',
        'credentials': 'same-origin'
      },
      method: 'POST',
      body: `{"task": ${JSON.stringify(body)}}`
    }

    this.setState({isFetching: true})
    fetch('http://localhost:4517/tasks', options)
      .then( (response) => {
        if(!response.ok){
          throw new Error(`${response.status} ${response.statusText}`)
        }
        return response.json()
      })
      .then( this.getAllTasks )
      .catch( (error) => {
        console.log(error)
        this.setState({
          isFetching: false,
          error
        })
       })//catch
  }

  deleteTask(e){
    e.preventDefault()
    let taskId = e.target.id

    const options = {
      headers: {
        'Content-Type': 'application/json',
        'credentials': 'same-origin'
      },
      method: 'DELETE'
    }

    fetch(`http://localhost:4517/tasks/${taskId}`, options)
      .then( (response) => {
        if(!response.ok){
          throw new Error(`${response.status} ${response.statusText}`)
        }
        return response.json()
      })
      .then( this.getAllTasks )
      .catch( (error) => {
        console.log(error)
        this.setState({
          isFetching: false,
          error
        })
       })//catch
  }


  render(){
    const {tasks, loading, isFetching} = this.state
    const deleteTask = this.deleteTask
    const taskList = tasks.map(function(task){
      return <Task key={task.id} attributes={task.attributes} id={task.id} deleteTask={deleteTask}/>
    })
    return (
      <div className="container">
        <TaskForm onSubmit={this.addNewTask}/>

        <div className="card-group task-list">
          {isFetching ? <img className='loading-spinner' src={loading} alt='Loading...' /> : taskList}
        </div>
      </div>
    )
  }
}

export default TaskList
