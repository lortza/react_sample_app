import React from "react"

class Task extends React.Component {
  render(){
    return (
      <div class="card card-body">
        <p>{this.props.details.title}</p>
      </div>
    )
  }
}

export default Task
