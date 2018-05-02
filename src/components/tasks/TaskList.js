import React from "react"
import Task from './Task'




class TaskList extends React.Component {
  constructor(){
    // Always call super first
    super()
    this.state = {
      tasks: [],
      loading: '/images/loading1.gif',
      isFetching: false
    }
  }

  componentDidMount() {
    // Before performing the fetch, set isFetching to true
    this.setState({isFetching: true})
    // After component mounts, call the API to get the
    // users, then update state which triggers re-render
    fetch('http://localhost:4517/tasks', {
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


  render(){
    const {tasks, loading, isFetching} = this.state
    const taskList = tasks.map(function(task){
      return <Task key={task.id} attributes={task.attributes} />
    })
    return (
      <div className="container">
        <div className="card-group task-list">
          {isFetching ? <img className='loading-spinner' src={loading} alt='Loading...' /> : taskList}
        </div>
      </div>
    )
  }
}

export default TaskList
